import { StyledList, StyledListItem, StyledNavLink } from './MobileMenu.styled';
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
                     <animated.div style={{ ...styles, minHeight: '100vh', backgroundColor: 'tomato' }}>
              <StyledList>
                             <StyledListItem><StyledNavLink to="/" onClick={() => handleModal(false)}>Домашня</StyledNavLink></StyledListItem>
                             <StyledListItem><StyledNavLink to="/permanent" onClick={()=>handleModal(false)}>Перманент</StyledNavLink></StyledListItem>
                <StyledListItem><StyledNavLink to="/makeup" onClick={()=>handleModal(false)}>Макіяж</StyledNavLink></StyledListItem>
                <StyledListItem><StyledNavLink to="/eyebrows" onClick={()=>handleModal(false)}>Архітектура брів</StyledNavLink></StyledListItem>
                <StyledListItem><StyledNavLink to="/courses" onClick={()=>handleModal(false)}>Курси</StyledNavLink></StyledListItem>
                 </StyledList>
        </animated.div>))
    )
}