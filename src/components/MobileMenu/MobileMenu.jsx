import { StyledList, StyledListItem, StyledNavLink, StyledFacebookSvg, StyledTelegramSvg,StyledInstaSvg,StyledSocialList,StyledViberSvg,StyledSocialLink,StyledPhoneSvg,StyledPhoneNumber } from './MobileMenu.styled';
import { useTransition, animated } from '@react-spring/web';

export const MobileMenu = ({handleModal}) => {
    
     const transitions = useTransition(true, {
    from: { opacity: 0, transform: 'translateX(100%)' },
    enter: {
      opacity: 1,
      transform: 'translateX(0)',
      transition: 'all 150ms',
    },
    leave: { opacity: 0, transform: 'translateX(100%)' },
    delay: 250,
  })
    
    return (
         transitions(
      (styles, item) =>
        item && (
               <animated.div style={{ ...styles, width: '100%', minHeight: '100vh', backgroundColor: 'black', position: 'relative', zIndex: '1001' }}>
              <StyledList>
                             <StyledListItem><StyledNavLink to="/" onClick={() => handleModal(false)}>Домашня</StyledNavLink></StyledListItem>
                             <StyledListItem><StyledNavLink to="/permanent" onClick={()=>handleModal(false)}>Перманент</StyledNavLink></StyledListItem>
                <StyledListItem><StyledNavLink to="/makeup" onClick={()=>handleModal(false)}>Макіяж</StyledNavLink></StyledListItem>
                <StyledListItem><StyledNavLink to="/eyebrows" onClick={()=>handleModal(false)}>Архітектура брів</StyledNavLink></StyledListItem>
                <StyledListItem><StyledNavLink to="/courses" onClick={()=>handleModal(false)}>Курси</StyledNavLink></StyledListItem>
                 </StyledList>
                 <StyledSocialList>
                   <li><StyledSocialLink
                     href="https://www.instagram.com/lesya_permanent_if/"
                             target="_blank"
                             rel="noopener noreferrer" ><StyledInstaSvg/></StyledSocialLink></li>
                   <li><StyledSocialLink  href="https://www.facebook.com/profile.php?id=100011453648326&locale=uk_UA"
                             target="_blank"
                             rel="noopener noreferrer"><StyledFacebookSvg
                     /></StyledSocialLink></li>
                   <li><StyledSocialLink href='https://t.me/lesya_permanent_khrebtan'  target="_blank"
                             rel="noopener noreferrer"><StyledTelegramSvg /></StyledSocialLink></li>
                   
                   <li><StyledSocialLink href='viber://chat?number=380508832226'  target="_blank"
                             rel="noopener noreferrer"><StyledViberSvg/></StyledSocialLink></li>
                 </StyledSocialList>
                 <StyledPhoneNumber><StyledPhoneSvg/> +380508832226</StyledPhoneNumber>
        </animated.div>))
    )
}