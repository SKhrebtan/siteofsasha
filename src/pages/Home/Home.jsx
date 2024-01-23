import { useTransition, animated } from '@react-spring/web';
// import { SwiperHome } from 'components/Swiper/Swiper';
// import { homeSwiperData } from 'components/Swiper/data/home';
import { Accordion } from 'components/AccordionHome/Accordion';
import { Accordion2 } from 'components/AccordionHome/Accordion2/Accordion2';
// import { VideoHome } from 'components/VideoHome/VideoHome';
import { ContactForm } from 'components/FormDiscont/FormDiscont';
import HowItWorks from 'components/NewCoolAccordion/AccoridonWrapper';
export const Home = () => {
   
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
              <animated.div style={{ ...styles, position: 'relative'}}>
                {/* <SwiperHome data={homeSwiperData} /> */}
                {/* <VideoHome/> */}
                <Accordion />
                <HowItWorks/>
                <ContactForm className='bg-blue-500'/>
                <Accordion2 />
        </animated.div>
        ))
    )
}