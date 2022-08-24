import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LinkItemBar = styled(NavLink)`
  display: block;
  margin-left: 20px;
  min-width: 80px;
  text-align: center;
  text-decoration: none;
  color: white;
  &.active {
    border-bottom: 4px solid white;
    border-left: 1px solid white;
    border-right: 1px solid white;
  }
`;
export const ConditionUser = styled.div`
  display: flex;
  min-width: 80px;
  text-decoration: none;
  color: white;
  margin-right: 10px;
`;
