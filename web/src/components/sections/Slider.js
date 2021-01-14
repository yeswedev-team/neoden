import React from 'react';
import Img from 'gatsby-image';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import PortableText from '../PortableText';
import Wave from '../Wave';
import SliderStyles from '../../styles/SliderStyles';

SwiperCore.use([Navigation, Pagination]);

export default function Slider({
  title,
  overtitle,
  text,
  slides,
  hasWaveUp,
  hasWaveDown,
}) {
  return (
    <SliderStyles
      hasWaveDown={hasWaveDown}
      hasWaveUp={hasWaveUp}
      className={`${hasWaveDown ? 'section has-wave-down' : ''}${
        hasWaveUp ? ' section has-wave-up' : ''
      }`}
    >
      {hasWaveUp && <Wave bgcolor="#F2F2F2" />}
      <div className="container container--sm slider__intro">
        {overtitle && <p className="overtitle">{overtitle}</p>}
        {title && <h2 className="section-title">{title}</h2>}
        {text && <PortableText blocks={text} />}
      </div>
      <div className="container container--md">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          autoHeight
          grabCursor
          navigation
          pagination={{ clickable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide._key} className="slide">
              {slide.image && <Img fluid={slide.image.asset.fluid} alt="" />}
              <div className="slide__text">
                {slide.title && <h3>{slide.title}</h3>}
                {slide._rawIntro && <PortableText blocks={slide._rawIntro} />}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {hasWaveDown && <Wave bgcolor="#F2F2F2" reversed />}
    </SliderStyles>
  );
}
