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
import { Link } from 'gatsby';
import { IoMdOpen } from 'react-icons/io';
import { getBlogUrl } from '../../utils/helpers';
import 'swiper/swiper-bundle.css';
import Wavify from '../Wave';
import PortableText from '../PortableText';
import { mq } from '../../styles/breakpoints';
import arrow from '../../assets/images/arrow.svg';

SwiperCore.use([Controller, Navigation, Pagination, EffectFade]);

const TestimoniesStyles = styled.section`
  background-color: var(--grey);
  position: relative;
  z-index: 3;

  .testimonies__header {
    padding-bottom: 2.25rem;
    text-align: center;
  }

  .slide {
    border-radius: var(--radius);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 4.375rem;

    &.slide-testimony {
      background-color: var(--beigelight);
      padding: 2.3125rem;
      text-align: center;
    }
    &.slide-online {
      background-color: var(--white);

      .slide__text {
        padding: 2.3125rem;
      }
    }

    img {
      border-radius: var(--radius) var(--radius) 0 0;
    }
    .block {
      *:last-child {
        margin-bottom: 0;
      }
    }
  }

  .slide__text {
    margin-bottom: auto;
  }

  .meta {
    font-family: var(--font-titles);
    margin-bottom: 1.875rem;
    margin-top: 0;
  }

  .button {
    bottom: 2.3125rem;
    left: 50%;
    margin-top: 1.25rem;
    position: absolute;
    text-align: center;
    transform: translateX(-50%);
  }

  .small-title {
    font-weight: 500;
  }

  .swiper-wrapper {
    align-items: stretch;
  }

  .swiper-container {
    padding-bottom: 4.375rem;
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
    left: calc(50% - 120px);
  }
  .swiper-button-next,
  .swiper-container-rtl .swiper-button-prev {
    right: calc(50% - 120px);
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
      {hasWaveUp && <Wavify direction="up" bgcolor="#f2f2f2" />}
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
          autoHeight
          grabCursor
          navigation
          pagination={{ clickable: true }}
        >
          {list.map((slide, index) => {
            let link;
            if (slide.pageLink[0]) {
              const cta = slide.pageLink[0];
              if (cta._type === 'post') {
                link = getBlogUrl(cta.publishedAt, cta.slug.current);
              } else {
                link = `/${cta.slug.current}`;
              }
            }

            return (
              <SwiperSlide
                key={`slide-testimony-${index}`}
                className={`slide ${
                  slide.type === 'testimony'
                    ? 'slide-testimony'
                    : 'slide-online'
                }`}
              >
                {slide.publishedAt && (
                  <p className="meta">
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
                  {slide.title && (
                    <h3 className="small-title">{slide.title}</h3>
                  )}
                  {slide._rawText && <PortableText blocks={slide._rawText} />}
                </div>
                {slide.pageLink[0] && (
                  <Link className="button button--brown" to={link}>
                    {slide.buttonText}
                  </Link>
                )}
                {slide.externalLink && (
                  <a
                    href={slide.externalLink}
                    target="_blank"
                    rel="noreferrer"
                    className="button button--brown"
                  >
                    {slide.buttonText} <IoMdOpen />
                  </a>
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {hasWaveDown && <Wavify direction="down" bgcolor="#f2f2f2" />}
    </TestimoniesStyles>
  );
}
