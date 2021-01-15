import styled from 'styled-components';
import { mq } from './breakpoints';
import arrow from '../assets/images/arrow.svg';

const SliderStyles = styled.section`
  background-color: var(--grey);
  padding-bottom: ${(props) =>
    props.hasWaveDown ? '0' : 'var(--section-bot-padding)'};
  padding-top: ${(props) =>
    props.hasWaveUp ? '0' : 'var(--section-top-padding)'};
  position: relative;
  z-index: 3;

  .container--md {
    display: flex;
  }

  .swiper-slide {
    min-height: 100%;
  }

  .slider__intro {
    padding-bottom: 1.875rem;
    text-align: center;
  }

  .overtitle {
    margin: 0;
  }

  .swiper-container {
    width: 100%;

    ${mq[2]} {
      width: 50%;
    }
  }

  .swiper-slide {
    display: flex;
    width: 100%;

    h3 {
      font-size: 1.5rem;
    }
  }

  .gatsby-image-wrapper {
    width: 100%;
    img {
      border-radius: var(--radius) 0 0 var(--radius);
    }
  }

  .slide__text {
    background-color: var(--white);
    padding: 3.125rem 2.25rem 3.25rem 2.5rem;
  }
  .swiper-container-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-custom,
  .swiper-pagination-fraction {
    ${mq[2]} {
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
    ${mq[2]} {
      left: 2.5rem;
    }
  }
  .swiper-button-next,
  .swiper-container-rtl .swiper-button-prev {
    right: 2.5rem;
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

export default SliderStyles;
