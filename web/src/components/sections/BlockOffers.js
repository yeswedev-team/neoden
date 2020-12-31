import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { pxtopc } from '../../styles/Mixins';
import tressageBg from '../../assets/images/tressage-pattern.jpg';

console.log(tressageBg);

const BlockOffersStyles = styled.section`
  background: #a5968f url(${tressageBg}) 0 0 repeat;
  background-blend-mode: multiply;
  color: var(--white);
  padding-bottom: var(--section-bot-padding);
  padding-top: var(--section-top-padding);
  text-align: center;

  .overtitle {
    font-weight: bold;
    margin: 0;
  }
  .section-title {
    margin-bottom: 2.8125rem;
  }
  .offersList {
    display: flex;
    justify-content: space-between;
  }
  .offer {
    width: ${pxtopc(275, 904)};
    position: relative;

    &__title {
      color: var(--white);
      font-size: 1.875rem;
      font-weight: normal;
      left: 50%;
      position: absolute;
      z-index: 2;
    }
    &:nth-child(3n + 1) .offer__title {
      bottom: calc((78 / 323) * 100%);
      transform: translateX(-50%);
    }
    &:nth-child(3n + 2) .offer__title {
      top: calc((45 / 323) * 100%);
      transform: translate(-50%);
    }
    &:nth-child(3n + 3) .offer__title {
      top: 50%;
      transform: translate(-50%, -50%);
    }
    img {
      border-radius: 5px;
    }
    .button {
      transform: translateY(-50%);
    }
  }
`;

export default function Offers({ title, overtitle, offerLink }) {
  console.log(offerLink);
  return (
    <BlockOffersStyles className="section section__block-offers">
      <div className="container container--md">
        {overtitle && <p className="overtitle">{overtitle}</p>}
        {title && <h2 className="section-title">{title}</h2>}
        {offerLink && (
          <div className="offersList">
            {offerLink.map((offer) => {
              console.log(offer);
              return (
                <div key={offer.id} className="offer">
                  <Link to={`/offres/${offer.slug.current}`}>
                    <h3 className="offer__title">{offer.title}</h3>
                    <Img fluid={offer.imageAlt.asset.fluid} alt={offer.title} />
                  </Link>
                  <Link
                    to={`/offres/${offer.slug.current}`}
                    className="button button--brown"
                  >
                    En savoir plus
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </BlockOffersStyles>
  );
}