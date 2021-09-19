import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Wavify from '../Wave';
import { pxtopc } from '../../styles/Mixins';
import { mq } from '../../styles/breakpoints';
import tressageBg from '../../assets/images/tressage-pattern.jpg';

const handleZIndex = (props) => {
  if (props.hasWaveDown) {
    return '4';
  }
  if (props.hasWaveUp && !props.hasWaveDown) {
    return '3';
  }
  return '1';
};

const BlockOffersStyles = styled.section`
  background: #9f8b84;
  color: var(--white);
  padding-bottom: ${(props) =>
    props.hasDoubleBotMargin
      ? 'calc(var(--section-bot-padding) * 2)'
      : 'var(--section-bot-padding)'};
  padding-top: ${(props) =>
    props.hasWaveUp ? '0' : 'calc(var(--section-top-padding) * 2)'};
  text-align: center;
  z-index: ${(props) => handleZIndex(props)};

  ${mq[2]} {
    background: #a5968f url(${tressageBg}) 0 0 repeat;
    background-blend-mode: multiply;
    background-size: 12.5rem;
  }

  .overtitle {
    font-weight: bold;
    margin: 0;
  }
  .section-title {
    margin-bottom: 2.8125rem;
  }
  .offersList {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    ${mq[1]} {
      gap: 4%;
    }
    ${mq[2]} {
      /* flex-wrap: nowrap; */
      justify-content: center;
      gap: 1.875rem;
    }
  }
  .offer {
    position: relative;
    width: 100%;

    ${mq[1]} {
      width: 48%;
    }
    ${mq[2]} {
      width: 30%;
    }

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
    .gatsby-image-wrapper:hover {
      .offer__title {
        pointer-events: none;
      }
    }
    .gatsby-image-wrapper,
    img {
      border-radius: var(--radius);
    }
    img {
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
  hasWaveDown,
  hasWaveUp,
}) {
  return (
    <BlockOffersStyles
      hasDoubleBotMargin={hasDoubleBotMargin}
      hasWaveDown={hasWaveDown}
      hasWaveUp={hasWaveUp}
      className="section section__block-offers"
    >
      {hasWaveUp && <Wavify direction="up" bgcolor="#9f8b84" />}
      <div className="container container--md">
        {overtitle && <p className="overtitle">{overtitle}</p>}
        {title && <h2 className="section-title">{title}</h2>}
        {offerLink && (
          <div className="offersList">
            {offerLink.map((offer) => {
              console.log(offer);
              return (
                <div key={offer.id} className="offer grow">
                  <Link to={`/${offer.slug.current}`}>
                    <h3 className="offer__title">{offer.title.fr}</h3>
                    <GatsbyImage
                      image={getImage(offer.image.asset)}
                      alt={offer.title.fr}
                    />
                  </Link>
                  <Link
                    to={`/offres-bien-etre/?offer=${offer.slug.current}`}
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
      {hasWaveDown && <Wavify direction="down" bgcolor="#9f8b84" />}
    </BlockOffersStyles>
  );
}
