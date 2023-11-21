import { Autoplay } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import {
  StyledWrapper,
  StyledContiner,
  StyledSwiper,
  StyledSlideLink,
} from './Swiper.styled';
import 'swiper/css';

export const SwiperHome = ({ data }) => {
  return (
    <StyledWrapper>
      <StyledContiner>
        <StyledSwiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          //   spaceBetween={5}
          slidesPerView={1}
          loop={true}
        >
          {data.map(item => (
            <SwiperSlide key={item.id}>
              <StyledSlideLink to={`/${item.alt}`}>
                <img className="image" alt={item.alt} src={item.img} />
                {item.alt}
              </StyledSlideLink>
            </SwiperSlide>
          ))}
        </StyledSwiper>
      </StyledContiner>
    </StyledWrapper>
  );
};
