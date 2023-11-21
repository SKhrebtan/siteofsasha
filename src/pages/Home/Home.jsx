import { useTransition, animated } from '@react-spring/web';
import { SwiperHome } from 'components/Swiper/Swiper';
import { homeSwiperData } from 'components/Swiper/data/home';
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
              <animated.div style={{ ...styles, minHeight: '90vh' }}>
                <SwiperHome data={homeSwiperData} />
        </animated.div>
        ))
    )
}