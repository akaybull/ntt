import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CardMedia } from "@mui/material";
import styled from "@emotion/styled";
import image1 from "../assets/images/1.jpg";
import image2 from "../assets/images/2.jpg";
import image3 from "../assets/images/3.jpg";
import image4 from "../assets/images/4.jpg";
export const SliderStyled = styled(Slider)`
  & .slick-dots {
    display: flex !important;
    justify-content: end;
    align-items: center;
    background: #00000066;
    height: 58px;
    bottom: 0px;
    padding-right: 34px;
  }
  & .slick-dots li button:before {
    font-size: 10px;
    color: #fff;
    opacity: 1;
  }
  & .slick-dots li.slick-active button:before {
    color: #000;
  }
`;

const CardMediaStyled = styled(CardMedia)`
  height: 450px !important;
  width: 100%;
  max-width: 100%;
`;

const Sliderr = () => {
  const settings = {
    speed: 500,
    arrows: false,
    dots: true,
    useTransform: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <SliderStyled {...settings}>
      <CardMediaStyled
        component="img"
        height="450px !important"
        image={image1}
      />

      <CardMediaStyled
        component="img"
        height="450px !important"
        image={image2}
      />

      <CardMediaStyled
        component="img"
        height="450px !important"
        image={image3}
      />

      <CardMediaStyled
        component="img"
        height="450px !important"
        image={image4}
      />
    </SliderStyled>
  );
};
export default Sliderr;
