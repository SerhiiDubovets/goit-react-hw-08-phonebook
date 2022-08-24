import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Typography from '@mui/material/Typography';
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';

import authSelectors from 'redux/auth/auth-selectors';
import { LinkItem, LinkItemBar } from './Navigation.styled';

const pages = ['Home', 'Contacts'];

const Navigation = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
        >
          <MenuItem onClick={handleCloseNavMenu}>
            <LinkItem to="/home">
              <Typography textAlign="center">Home</Typography>
            </LinkItem>
          </MenuItem>
          {isLoggedIn && (
            <MenuItem onClick={handleCloseNavMenu}>
              <LinkItem to="/contacts">
                <Typography textAlign="center">Contacts</Typography>
              </LinkItem>
            </MenuItem>
          )}
        </Menu>
      </Box>
      <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
      <Typography
        variant="h5"
        noWrap
        component="a"
        href="/home"
        sx={{
          mr: 2,
          display: { xs: 'flex', md: 'none' },
          flexGrow: 1,
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        PHONEBOOK
      </Typography>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {isLoggedIn ? (
          pages.map(page => (
            <LinkItemBar
              to={page}
              activeclassname="current"
              key={page}
              onClick={handleCloseNavMenu}
            >
              {page}
            </LinkItemBar>
          ))
        ) : (
          <LinkItemBar
            to="/home"
            activeclassname="current"
            onClick={handleCloseNavMenu}
          >
            Home
          </LinkItemBar>
        )}
      </Box>
    </>
  );
};

export default Navigation;
