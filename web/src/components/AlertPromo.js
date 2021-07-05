import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { MdCardGiftcard } from 'react-icons/md';
import { IoMdOpen } from 'react-icons/io';
import { pxtoem } from '../styles/Mixins';
import { mq } from '../styles/breakpoints';

const PromoStyles = styled.div`
  .promo__content {
    padding-bottom: 2rem;
    padding-top: 2rem;
    text-align: center;

    p {
      margin: 0;
    }
  }
  .discount {
    font-family: var(--font);
    font-size: 1.4375rem;
    font-weight: 600;
    line-height: calc(26 / 23);
    margin-bottom: 1.625rem;
    margin-top: 1rem;
    text-transform: none;

    strong {
      display: block;
      font-size: ${pxtoem(65, 23)};
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

    svg {
      margin-left: 0.4375rem;
    }
  }
`;

export default function AlertSimple({ content }) {
  const {
    image,
    title,
    period,
    discount,
    text,
    offerlink,
    bookinglink,
  } = content;
  // console.log(image);
  return (
    <PromoStyles>
      {image && (
        <div className="img-container">
          <Img fluid={image?.asset.fluid} alt={title} />
        </div>
      )}
      <div className="promo__content">
        {title && <h2 className="promo__title">{title}</h2>}
        {period && <p>{period}</p>}
        {discount && (
          <h3 className="discount">
            <strong>-{discount}</strong>
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
    </PromoStyles>
  );
}
