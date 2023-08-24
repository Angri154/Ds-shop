import React from 'react';
import Slider from 'react-slick';
import photoSlider__1 from '../../assets/slider/slider-1.jpg';
import photoSlider__2 from '../../assets/slider/slider-2.jpg';
import photoSlider__3 from '../../assets/slider/slider-3.jpg';
import button__left from '../../assets/slider/buton-left.jpg';
import button__right from '../../assets/slider/buton-right.jpg';
import style from './Slider.module.scss';
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: (
      <div class={style.slick_prev}>
        <img src={button__left} alt="button" />
      </div>
    ),
    nextArrow: (
      <div class={style.slick_next}>
        <img src={button__right} alt="button" />
      </div>
    ),
  };
  return (
    <Slider className={style.slider} {...settings}>
      <div>
        <img className={style.slider__foto} alt="slider-foto" src={photoSlider__1} />
      </div>
      <div>
        {/* <div className={style.left__text}></div> */}
        <img className={style.slider__foto} alt="slider-foto" src={photoSlider__2} />
      </div>
      <div>
        {/* <div className={style.left__text}></div> */}
        <img className={style.slider__foto} alt="slider-foto" src={photoSlider__3} />
      </div>
    </Slider>
  );
}
