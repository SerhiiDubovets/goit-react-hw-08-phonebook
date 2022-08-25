import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import authSelectors from 'redux/auth/auth-selectors';
import authOperations from 'redux/auth/auth-operations';

import { LinkItem, UserTitle } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogOut = () => {
    dispatch(authOperations.logOut());
    setAnchorElUser(null);
  };

  return (
    <>
      <UserTitle>Welcome, {name}</UserTitle>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem>
          <LinkItem to="/home" onClick={handleLogOut}>
            Log out
          </LinkItem>
        </MenuItem>
      </Menu>
    </>
  );
};

export default UserMenu;
