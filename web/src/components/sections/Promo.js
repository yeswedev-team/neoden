import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { MdCardGiftcard } from 'react-icons/md';
import { IoMdOpen } from 'react-icons/io';
import { mq } from '../../styles/breakpoints';
import { pxtoem, pxtopc } from '../../styles/Mixins';
import Wave from '../Wave';

const PromoStyles = styled.section`
  padding-bottom: 0;
  padding-top: ${(props) =>
    props.hasWaveUp ? '0' : 'var(--section-top-padding)'};
  position: relative;
  z-index: 3;

  .container {
    display: flex;
    position: relative;
  }
  .promo__content {
    background-color: var(--beigelight);
    border-radius: 0 5px 5px 0;
    padding: 1.625rem 2.5rem 1.75rem;
    text-align: center;

    p {
      margin: 0;
    }

    ${mq[2]} {
      width: ${pxtopc(380, 905)};
    }
  }
  .gatsby-image-wrapper {
    ${mq[2]} {
      width: ${pxtopc(525, 905)};
    }
    img {
      border-radius: 5px 0 0 5px;
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
  .actions {
    display: flex;
    justify-content: space-between;
  }
  svg {
    margin-left: 0.4375rem;
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
    {hasWaveUp && <Wave bgcolor="white" />}
    <div className="container container--md">
      {image && <Img fluid={image?.asset.fluid} alt={title} />}
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
            <a href={offerlink} className="button">
              J'offre <MdCardGiftcard />
            </a>
          )}
          {bookinglink && (
            <a href={bookinglink} className="button button--brown">
              Je réserve <IoMdOpen />
            </a>
          )}
        </div>
      </div>
    </div>
    {hasWaveDown && <Wave bgcolor="white" reversed />}
  </PromoStyles>
);

export default Promo;