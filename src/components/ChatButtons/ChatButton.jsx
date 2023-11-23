import { StyledContainer, StyledChatSvg } from "./ChatButton.styled";
import { useState } from "react";
import { useTransition, animated } from '@react-spring/web';
import { ReactComponent as FacebookSvg } from 'img/socials/facebook2.svg'
import { ReactComponent as InstaSvg } from 'img/insta2.svg'
import { ReactComponent as TelegramSvg } from 'img/socials/telegram.svg'
import { ReactComponent as ViberSvg } from 'img/viber2.svg'
 
export const ChatButton = () => {
    const [showButtons, setShowButtons] = useState(false);

    const transitions = useTransition(showButtons, {
    from: { opacity: 0, transform: 'translateX(0px)' },
    enter: {
      opacity: 1,
      transform: 'translateX(-60px)',
      transition: 'all 200ms',
    },
    leave: { opacity: 0, transform: 'translateX(0px)' },   
    })
     const transitions2 = useTransition(showButtons, {
    from: { opacity: 0, transform: 'translateX(0px)' },
    enter: {
      opacity: 1,
      transform: 'translateX(-120px)',
      transition: 'all 200ms',
    },
    leave: { opacity: 0, transform: 'translateX(0px)' },   
     })
     const transitions3 = useTransition(showButtons, {
    from: { opacity: 0, transform: 'translateX(0px)' },
    enter: {
      opacity: 1,
      transform: 'translateX(-180px)',
      transition: 'all 200ms',
    },
    leave: { opacity: 0, transform: 'translateX(0px)' },   
     })
     const transitions4 = useTransition(showButtons, {
    from: { opacity: 0, transform: 'translateX(0px)' },
    enter: {
      opacity: 1,
      transform: 'translateX(-240px)',
      transition: 'all 200ms',
    },
    leave: { opacity: 0, transform: 'translateX(0px)' },   
    })
    
    return (
        <StyledContainer>
            <button onClick={()=> setShowButtons(!showButtons)} className="main-button" type="button">
                <StyledChatSvg/>
            </button>
            {transitions(
                (styles, item) =>
                    item && (
                        <animated.button style={styles} className="secondary-button viber-button" type='button'>
                            <ViberSvg className='svg' />
                        </animated.button>
                    ))}
            {transitions2(
                (styles, item) =>
                    item && (
                        <animated.button style={styles} className="secondary-button telegram-button" type='button'>
                            <TelegramSvg className='svg' />
                        </animated.button>
                    ))}
             {transitions3(
                (styles, item) =>
                    item && (
                         <animated.a
                              href="https://www.facebook.com/profile.php?id=100011453648326&locale=uk_UA"
                             target="_blank"
                             rel="noopener noreferrer"
                             style={styles}
                             className="secondary-button facebook-button">
                            <FacebookSvg className='facebook-svg' />
                        </animated.a>
                    ))}
             {transitions4(
                (styles, item) =>
                    item && (
                         <animated.a
                             href="https://www.instagram.com/lesya_permanent_if/"
                             target="_blank"
                             rel="noopener noreferrer"
                             style={styles} className="secondary-button insta-button" >
                            <InstaSvg className='insta-svg' />
                        </animated.a>
                    ))}
        </StyledContainer>
    )
}