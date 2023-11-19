import { styled } from "styled-components";
import { NavLink } from 'react-router-dom';

export const StyledNav = styled.nav`

`
export const StyledList = styled.ul`
display: flex;
gap: 30px;
`

export const StyledListItem = styled.li`

`

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
    
  &.active {
    color: orange;
  }
  &:hover{
   color: orange;
  }
`;