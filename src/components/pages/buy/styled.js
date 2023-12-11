import styled from "styled-components";
import {Swiper, SwiperSlide} from "swiper/react";

export const BuySection = styled.section `
    margin-top: 40px;
    display: flex;
    justify-content: center;
    gap: 20px
    `

export const BuyBlockRight = styled.section `
    max-height: 730px;
  overflow-y: hidden;
    `


export const StyledSlider = styled(Swiper)`
  height: 730px;
  margin: 0;
`;

export const SliderBlock = styled(SwiperSlide)`
  height: 288px !important;
  margin-bottom: 20px;
`;

export const PriceLabel = styled.span`
  font-size: 14px;
  text-align: left !important;
`

export const PriceValue = styled.span`
  display: block;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
  text-align: left !important;
`;