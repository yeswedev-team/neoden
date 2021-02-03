import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import React from 'react';
import styled from 'styled-components';
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
import AuthorList from '../blog/AuthorList';
import PortableText from '../PortableText';
import { mq } from '../../styles/breakpoints';
import arrow from '../../assets/images/arrow.svg';

SwiperCore.use([Controller, Navigation, Pagination, EffectFade]);

const TestimoniesStyles = styled.section`
  position: relative;
  z-index: 3;

  .testimonies__header {
    padding-bottom: 2.25rem;
    text-align: center;
  }

  .slide {
    box-sizing: border-box;
    padding: 2.3125rem;
  }

  .swiper-container {
    padding-bottom: 50px;
  }
  .swiper-container-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-custom,
  .swiper-pagination-fraction {
    ${mq[1]} {
      bottom: 1rem;
      left: 0;
      width: 100%;
    }
  }
  .swiper-pagination-bullet,
  .swiper-pagination-bullet-active {
    background-color: var(--brown);
  }
  .swiper-pagination-bullet {
    transition: transform 200ms ease-out;
    will-change: transform;
  }
  .swiper-pagination-bullet-active {
    transform: translateY(-10px);
  }
  .swiper-button-next,
  .swiper-button-prev {
    bottom: 1rem;
    height: 1.25rem;
    margin: 0;
    position: absolute;
    top: auto;
    width: 2.625rem;
    z-index: 11;
  }
  .swiper-button-prev,
  .swiper-container-rtl .swiper-button-next {
    left: 1.25rem;

    ${mq[1]} {
      left: 2.5rem;
    }
  }
  .swiper-button-next,
  .swiper-container-rtl .swiper-button-prev {
    right: 1.25rem;

    ${mq[1]} {
      right: 2.5rem;
    }
  }

  .swiper-button-prev:after,
  .swiper-container-rtl .swiper-button-next:after,
  .swiper-button-next:after,
  .swiper-container-rtl .swiper-button-prev:after {
    background: url(${arrow}) 0 0 no-repeat;
    content: '';
    height: 1.25rem;
    transform: scaleX(-1);
    width: 2.625rem;
  }
  .swiper-button-prev:after,
  .swiper-container-rtl .swiper-button-next:after {
    transform: none;
  }
`;

export default function BlockTestimonies({
  list,
  title,
  hasWaveDown,
  hasWaveUp,
  hasDoubleBotMargin,
}) {
  return (
    <TestimoniesStyles
      hasWaveDown={hasWaveDown}
      hasWaveUp={hasWaveUp}
      hasDoubleBotMargin={hasDoubleBotMargin}
      className={`section section__testimonies${
        hasWaveDown ? ' has-wave-down' : ''
      }${hasWaveUp ? ' has-wave-up' : ''}`}
    >
      {hasWaveUp && <Wavify direction="up" bgcolor="#ffffff" />}
      <div className="container container--sm testimonies__header">
        <h2 className="section-title">{title}</h2>
      </div>
      <div className="container container--lg">
        <Swiper
          className="slider-content"
          spaceBetween={40}
          slidesPerView={3}
          slidesPerGroup={3}
          speed={700}
          grabCursor
          navigation
          pagination={{ clickable: true }}
        >
          {list.map((slide, index) => {
            console.log(slide.publishedAt);
            return (
              <SwiperSlide key={`slide-testimony-${index}`} className="slide">
                {slide.publishedAt && (
                  <p className="blog-article__meta">
                    {slide.authors &&
                      slide.authors.map(({ author, _key }) => {
                        const authorName = author && author.name;
                        return <span key={_key}>{authorName}</span>;
                      })}
                    {' - '}
                    {format(new Date(slide.publishedAt), 'dd MMMM yyyy', {
                      locale: fr,
                    })}
                  </p>
                )}
                {slide?.image && (
                  <Img fluid={slide?.image?.asset?.fluid} alt={slide.title} />
                )}
                <div className="slide__text">
                  {slide.title && <h3>{slide.title}</h3>}
                  {slide._rawText && <PortableText blocks={slide._rawText} />}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {hasWaveDown && <Wavify direction="down" bgcolor="#ffffff" />}
    </TestimoniesStyles>
  );
}
