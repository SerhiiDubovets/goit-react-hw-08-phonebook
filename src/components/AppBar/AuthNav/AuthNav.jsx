import { ConditionUser, LinkItemBar } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <ConditionUser>
      <LinkItemBar to="/login" activeclassname="current">
        Log in
      </LinkItemBar>
      <LinkItemBar to="/signUp" activeclassname="current">
        Sing up
      </LinkItemBar>
    </ConditionUser>
  );
};

export default AuthNav;
