import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color:white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  /* 
  &:active {
    color: #e84a5f;
  } */
  &:hover {
    color:  #2a363b;
  }
`;
