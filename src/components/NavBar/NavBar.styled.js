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
  color: white;
  text-decoration: none;
  
font-family:Roboto;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: 1.2px;
transition: all 300ms linear;
  &.active {
    color: black;
  }
  &:hover{
   color: black;
  }
`;


