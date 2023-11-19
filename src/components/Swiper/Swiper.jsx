import { Autoplay } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import { StyledSwiper } from './Swiper.styled';
import 'swiper/css';
import photo1 from '../../img/ameli/1.jpg'
import photo2 from '../../img/ameli/2.jpg'
import photo3 from '../../img/ameli/3.jpg'
import photo4 from '../../img/ameli/4.jpg'

export const SwiperPermanent = () => {
   
    return (
        <>
              <StyledSwiper
                       autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
              modules={[Autoplay]}
    //   spaceBetween={5}
      slidesPerView={1}
    
     loop={true}
          onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
            <SwiperSlide className="slide"><img alt='ameli' src={photo1 } />erve</SwiperSlide>
            <SwiperSlide className="slide"><img alt='ameli' src={photo2 } />ervre</SwiperSlide>
            <SwiperSlide className="slide"><img alt='ameli' src={photo3 } />ervre</SwiperSlide>
      <SwiperSlide className="slide"><img alt='ameli' src={photo4 } />verve</SwiperSlide>
        </StyledSwiper>
           <StyledSwiper
      
      modules={[Autoplay]}
      spaceBetween={10}
      slidesPerView={2}
      autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
     loop={true}
       
      onSlideChange={() => console.log('slide change')}
    >
            <SwiperSlide><img alt='ameli' src={photo1 } />erve</SwiperSlide>
            <SwiperSlide><img alt='ameli' src={photo2 } />ervre</SwiperSlide>
            <SwiperSlide><img alt='ameli' src={photo3 } />ervre</SwiperSlide>
      <SwiperSlide><img alt='ameli' src={photo4 } />verve</SwiperSlide>
         </StyledSwiper>
        </>
        
      )
  }
