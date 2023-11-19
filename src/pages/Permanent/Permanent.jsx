import { useTransition, animated } from '@react-spring/web';
import { SwiperPermanent } from 'components/Swiper/Swiper';

export const Permanent = () => {
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
              <animated.div style={{ ...styles, width: '100%', minHeight: '90vh' }}>
                <h1>Permanent</h1>
          <SwiperPermanent/>    
              </animated.div>
        ))
    )
}