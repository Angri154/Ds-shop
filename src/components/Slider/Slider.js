import React from 'react';
import Slider from 'react-slick';
import photoSlider__1 from '../../assets/slider/slider-1.jpg';
import photoSlider__2 from '../../assets/slider/slider-2.jpg';
import photoSlider__3 from '../../assets/slider/slider-3.jpg';
import style from './Slider.module.scss';
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <img className={style.slider__foto} src={photoSlider__1} />
      </div>
      <div>
        <img className={style.slider__foto} src={photoSlider__2} />
      </div>
      <div>
        <img className={style.slider__foto} src={photoSlider__3} />
      </div>
    </Slider>
  );
}
