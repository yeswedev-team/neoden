import React from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from 'styled-components';
import { MdCardGiftcard } from 'react-icons/md';
import { IoMdOpen } from 'react-icons/io';
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
              J'offre <MdCardGiftcard />
            </a>
          )}
          {bookinglink && (
            <a
              href={bookinglink}
              className="button button--brown"
              target="_blank"
              rel="noreferrer"
            >
              Je réserve <IoMdOpen />
            </a>
          )}
        </div>
      </div>
    </div>
    {hasWaveDown && <Wavify direction="down" bgcolor="#ffffff" />}
  </PromoStyles>
);

export default Promo;
