import React from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from 'styled-components';
import Wavify from '../Wave';
import { mq } from '../../styles/breakpoints';
import { pxtoem, pxtopc } from '../../styles/Mixins';
import Overprint from '../../assets/images/ondes.inline.svg';

const handleZIndex = (props) => {
  if (props.hasWaveDown) {
    return '4';
  }
  if (props.hasWaveUp && !props.hasWaveDown) {
    return '3';
  }
  return '1';
};

const PromoStyles = styled.section`
  padding-bottom: 0;
  padding-top: ${(props) =>
    props.hasWaveUp ? '0' : 'var(--section-top-padding)'};
  position: relative;
  z-index: ${(props) => handleZIndex(props)};

  .container {
    display: flex;
    flex-wrap: wrap;
    position: relative;

    ${mq[2]} {
      flex-wrap: nowrap;
    }
  }
  .promo__content {
    background-color: var(--beigelight);
    border-radius: 0 0 var(--radius) var(--radius);
    padding: 1.625rem 2.5rem 1.75rem;
    text-align: center;
    width: 100%;

    p {
      margin: 0;
    }

    ${mq[2]} {
      border-radius: 0 var(--radius) var(--radius) 0;
      width: ${pxtopc(380, 905)};
    }
  }
  .gatsby-image-wrapper {
    img {
      border-radius: var(--radius) var(--radius) 0 0;
    }

    ${mq[2]} {
      img {
        border-radius: var(--radius) 0 0 var(--radius);
      }
    }
  }
  .discount {
    font-family: var(--font);
    font-size: 1.4375rem;
    font-weight: 600;
    line-height: calc(26 / 23);
    margin-bottom: 1.625rem;
    margin-top: 1rem;

    strong {
      display: block;
      font-size: ${pxtoem(65, 23)};
    }
  }
  .img-container {
    position: relative;
    width: 100%;

    ${mq[2]} {
      width: ${pxtopc(525, 905)};
    }
  }

  .actions {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    .button:first-child {
      margin-bottom: 1rem;
    }

    ${mq[1]} {
      flex-wrap: nowrap;
      flex-direction: row;
      grid-column-gap: 1.25rem;
      justify-content: center;

      .button:first-child {
        margin-bottom: 0;
      }
    }
    ${mq[2]} {
      justify-content: space-between;
    }

    svg {
      margin-left: 0.4375rem;
    }
  }
`;

const Promo = ({
  title,
  image,
  period,
  discount,
  text,
  offerlink,
  bookinglink,
  hasWaveDown,
  hasWaveUp,
}) => (
  <PromoStyles
    hasWaveDown={hasWaveDown}
    hasWaveUp={hasWaveUp}
    className="section section__promo"
  >
    {hasWaveUp && <Wavify direction="up" bgcolor="#ffffff" />}
    <div className="container container--md">
      {image && (
        <div className="img-container">
          <Overprint className="overprint overprint--left" />
          <GatsbyImage image={getImage(image?.asset)} alt={title} />
        </div>
      )}
      <div className="promo__content">
        {title && <h2 className="promo__title">{title}</h2>}
        {period && <p>{period}</p>}
        {discount && (
          <h3 className="discount">
            <strong>-{discount}%</strong>
            {text && <span>{text}</span>}
          </h3>
        )}
        <div className="actions">
          {offerlink && (
            <a
              href={offerlink}
              className="button"
              target="_blank"
              rel="noreferrer"
            >
              J'offre <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 00-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"></path></svg>
            </a>
          )}
          {bookinglink && (
            <a
              href={bookinglink}
              className="button button--brown"
              target="_blank"
              rel="noreferrer"
            >
              Je réserve <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M405.34 405.332H106.66V106.668H240V64H106.66C83.191 64 64 83.197 64 106.668v298.664C64 428.803 83.191 448 106.66 448h298.68c23.469 0 42.66-19.197 42.66-42.668V272h-42.66v133.332zM288 64v42.668h87.474L159.999 322.133l29.866 29.866 215.476-215.47V224H448V64H288z"></path></svg>
            </a>
          )}
        </div>
      </div>
    </div>
    {hasWaveDown && <Wavify direction="down" bgcolor="#ffffff" />}
  </PromoStyles>
);

export default Promo;
