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
    content: "";
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 1px solid white;
    margin-top: 4px;
    margin-left: 4px;
  }
`;

const CardMediaStyled = styled(CardMedia)`
  height: 450px !important;
  width: 100%;
  max-width: 100%;
  height: 100%;
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
      <CardMediaStyled component="img" image={image1} />

      <CardMediaStyled component="img" image={image2} />

      <CardMediaStyled component="img" image={image3} />

      <CardMediaStyled component="img" image={image4} />
    </SliderStyled>
  );
};
export default Sliderr;
