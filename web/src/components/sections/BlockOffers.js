import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { pxtopc } from '../../styles/Mixins';
import tressageBg from '../../assets/images/tressage-pattern.jpg';

const BlockOffersStyles = styled.section`
  background: #a5968f url(${tressageBg}) 0 0 repeat;
  background-blend-mode: multiply;
  color: var(--white);
  padding-bottom: ${(props) =>
    props.hasDoubleBotMargin
      ? 'calc(var(--section-bot-padding) * 2)'
      : 'var(--section-bot-padding)'};
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
      border-radius: var(--radius);
      filter: brightness(0.8);
    }
    .button {
      transform: translateY(-50%);
    }
  }
`;

export default function Offers({
  title,
  overtitle,
  offerLink,
  hasDoubleBotMargin,
}) {
  return (
    <BlockOffersStyles
      hasDoubleBotMargin={hasDoubleBotMargin}
      className="section section__block-offers"
    >
      <div className="container container--md">
        {overtitle && <p className="overtitle">{overtitle}</p>}
        {title && <h2 className="section-title">{title}</h2>}
        {offerLink && (
          <div className="offersList">
            {offerLink.map((offer) => (
              <div key={offer.id} className="offer">
                <Link to={`/offres-bien-etre/#${offer.slug.current}`}>
                  <h3 className="offer__title">{offer.title}</h3>
                  <Img
                    fluid={offer.image.asset.fluid}
                    alt={offer.title}
                    className="grow"
                  />
                </Link>
                <Link
                  to={`/offres-bien-etre/#${offer.slug.current}`}
                  className="button button--brown"
                >
                  En savoir plus
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </BlockOffersStyles>
  );
}
