import { StyledContainer, StyledChatSvg } from "./ChatButton.styled";
import { useState } from "react";
import { useTransition, animated } from '@react-spring/web';
import { ReactComponent as FacebookSvg } from 'img/socials/facebook2.svg';
import { ReactComponent as InstaSvg } from 'img/insta2.svg';
import { ReactComponent as TelegramSvg } from 'img/socials/telegram.svg';
import { ReactComponent as ViberSvg } from 'img/viber2.svg';
import { ReactComponent as CloseSvg } from 'img/close2.svg';
import { motion } from "framer-motion";

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

const variants = {
  open: { opacity: 1, rotate: '0deg' ,transition: { duration: 1 }   },
  closed: { opacity: 0, rotate: '720deg', transition: { duration: 1 } },
}

    
    return (
        <StyledContainer>
            <button onClick={()=> setShowButtons(!showButtons)} className="main-button" type="button">
                {/* {showButtons ? <CloseSvg className="close-svg" /> : <StyledChatSvg />} */}
                <motion.div animate={showButtons ? "closed" : "open"}
                    variants={variants}
                style={{position: 'absolute', width: '30px', height: '30px'}}
                >
                    <StyledChatSvg  />
                </motion.div>
                 <motion.div animate={showButtons ? "open" : "closed"}
                    variants={variants}
                    style={{ position: 'absolute', width: '30px', height: '30px' }}
                >
                    <CloseSvg className="close-svg" />
                </motion.div>
            </button>
            {transitions(
                (styles, item) =>
                    item && (
                        <animated.a href='viber://chat?number=380508832226'  target="_blank"
                             rel="noopener noreferrer" style={styles} className="secondary-button viber-button" type='button'>
                            <ViberSvg className='svg' />
                        </animated.a>
                    ))}
            {transitions2(
                (styles, item) =>
                    item && (
                        <animated.a href='https://t.me/lesya_permanent_khrebtan'  target="_blank"
                             rel="noopener noreferrer" style={styles} className="secondary-button telegram-button" type='button'>
                            <TelegramSvg className='svg' />
                        </animated.a>
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