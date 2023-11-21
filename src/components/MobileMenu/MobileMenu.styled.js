import { styled } from "styled-components";
import { NavLink } from 'react-router-dom';
import { ReactComponent as FacebookSvg } from '../../img/socials/facebook.svg'
import { ReactComponent as InstaSvg } from '../../img/socials/insta.svg'
import { ReactComponent as TelegramSvg } from '../../img/socials/telegram.svg'
import { ReactComponent as ViberSvg } from '../../img/socials/viber.svg'
import {ReactComponent as PhoneSvg} from '../../img/socials/phone.svg'
export const StyledList = styled.ul`
padding: 20px 0;
width: 220px;
margin: 0 auto;
display: flex;
flex-direction: column;
gap: 10px;
`
export const StyledListItem = styled.li`

`

export const StyledNavLink = styled(NavLink)`
color: white;
  text-decoration: none;
  
font-family:Roboto;
font-size: 22px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: 1.2px;
 &.active {
    color: #009999;
  }
`


export const StyledFacebookSvg = styled(FacebookSvg)`
width:40px;
height: 40px;
`
export const StyledInstaSvg = styled(InstaSvg)`
width:36px;
height: 36px;
`
export const StyledTelegramSvg = styled(TelegramSvg)`
width:36px;
height: 36px;
`
export const StyledViberSvg= styled(ViberSvg)`
width:36px;
height: 36px;
`

export const StyledPhoneNumber = styled.p`
display: flex;
  justify-content: center;
  align-items: center;
color: white;
  text-decoration: none;
  width: 220px;
 
  margin: 0 auto;
font-family:Roboto;
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: 1.2px;
`

export const StyledPhoneSvg = styled(PhoneSvg)`
width:34px;
height: 34px;
`

export const StyledSocialList = styled.ul`
width: 220px;
margin: 20px auto;
display: flex;
  justify-content: space-between;
  align-items: center;


`

export const StyledSocialLink = styled.a`
display: flex;
  justify-content: center;
  align-items: center;
width: 50px;
height: 50px;
  border: 1px solid #fff;
  border-radius: 50%;
`