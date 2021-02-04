import React, { useState } from 'react';
import Img from 'gatsby-image';
import SwiperCore, {
  Controller,
  Navigation,
  Pagination,
  EffectFade,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Wavify from '../Wave';
import PortableText from '../PortableText';
import SliderStyles from '../../styles/SliderStyles';

SwiperCore.use([Controller, Navigation, Pagination, EffectFade]);

export default function Slider({
  title,
  overtitle,
  text,
  slides,
  hasWaveUp,
  hasWaveDown,
}) {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  return (
    <SliderStyles
      hasWaveDown={hasWaveDown}
      hasWaveUp={hasWaveUp}
      className={`${hasWaveDown ? 'section has-wave-down' : ''}${
        hasWaveUp ? ' section has-wave-up' : ''
      }`}
    >
      {hasWaveUp && <Wavify direction="up" bgcolor="#F2F2F2" />}
      <div className="container container--sm slider__intro">
        {overtitle && <p className="overtitle">{overtitle}</p>}
        {title && <h2 className="section-title">{title}</h2>}
        {text && <PortableText blocks={text} />}
      </div>
      <div className="container container--xl">
        <Swiper
          className="slider-illustr"
          spaceBetween={0}
          slidesPerView={1}
          speed={700}
          grabCursor
          onSwiper={setFirstSwiper}
          controller={{ control: secondSwiper }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide._key} className="slide">
              {slide.image && <Img fluid={slide.image.asset.fluid} alt="" />}
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          className="slider-content"
          spaceBetween={0}
          slidesPerView={1}
          speed={700}
          effect="fade"
          grabCursor
          navigation
          pagination={{ clickable: true }}
          onSwiper={setSecondSwiper}
          controller={{ control: firstSwiper }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={`fade-${slide._key}`} className="slide">
              <div className="slide__text">
                {slide.title && <h3>{slide.title}</h3>}
                {slide._rawIntro && <PortableText blocks={slide._rawIntro} />}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {hasWaveDown && <Wavify direction="down" bgcolor="#F2F2F2" />}
    </SliderStyles>
  );
}
