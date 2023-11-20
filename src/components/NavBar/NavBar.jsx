import { StyledNav, StyledList, StyledListItem, StyledLink } from "./NavBar.styled"

export const NavBar = () => {

    return (
        <StyledNav>
            <StyledList>
                <StyledListItem><StyledLink to="/" >Домашня</StyledLink></StyledListItem>
                <StyledListItem><StyledLink to="/permanent" >Перманент</StyledLink></StyledListItem>
                <StyledListItem><StyledLink to="/makeup">Макіяж</StyledLink></StyledListItem>
                <StyledListItem><StyledLink to="/eyebrows">Архітектура брів</StyledLink></StyledListItem>
                <StyledListItem><StyledLink to="/courses">Курси</StyledLink></StyledListItem>
            </StyledList>
        </StyledNav>
    )
}