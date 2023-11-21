import { styled } from "styled-components";
import { Swiper } from 'swiper/react';
import { NavLink } from "react-router-dom";

export const StyledWrapper = styled.div`
padding: 30px 0;
  width: 100%;
`
export const StyledContiner = styled.div`

`

export const StyledSwiper = styled(Swiper)`
width: 100%;
height: 300px;
.slide {
    width: 100%;
}

.image {
    height: 280px;
    width: 100%;
}
`
export const StyledSlideLink = styled(NavLink)`
 display: block;
  width: 100%;
  height: 100%;
`

