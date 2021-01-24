import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Wavify from '../Wave';
import PortableText from '../PortableText';

const handleLocation = (props) => {
  if (
    (props.hasWaveDown && props.hasDoubleBotMargin) ||
    (!props.hasWaveDown && props.hasDoubleBotMargin)
  ) {
    return 'calc(var(--section-bot-padding) * 2)';
  }
  if (props.hasWaveDown && !props.hasDoubleBotMargin) {
    return '0';
  }
  return 'var(--section-bot-padding)';
};

const TwoColumnsStyles = styled.section`
  padding-bottom: ${(props) => handleLocation(props)};
  padding-top: ${(props) =>
    props.hasWaveUp ? '0' : 'calc(var(--section-top-padding) / 2)'};
  position: relative;
  z-index: 3;

  .col {
    position: relative;

    &__content {
      h2,
      h3 {
        color: var(--beige);
        font-size: 3.125rem;
        font-weight: normal;
      }
    }
  }
  img {
    border-radius: 8px;
  }
  .text-content {
    > *:first-child {
      margin-top: 0;
    }
    strong {
      font-weight: 700 !important;
    }
  }
`;

export default function TwoColumns({
  image,
  text,
  ctas,
  hasWaveUp,
  hasWaveDown,
  hasDoubleBotMargin,
  rightImage,
}) {
  const cta = ctas[0];
  return (
    <TwoColumnsStyles
      hasWaveDown={hasWaveDown}
      hasWaveUp={hasWaveUp}
      hasDoubleBotMargin={hasDoubleBotMargin}
      className={`section section__columns section__columns--two--withimg${
        rightImage === true ? ' img-at-right' : ''
      }${hasWaveDown ? ' has-wave-down' : ''}${
        hasWaveUp ? ' has-wave-up' : ''
      }`}
    >
      {hasWaveUp && <Wavify direction="up" bgcolor="#ffffff" />}
      <div className="container container--lg">
        <div className="col">
          <Img className="back-img" fluid={image.asset.fluid} alt="" />
        </div>
        <div className="col col__content">
          <PortableText blocks={text} id="text-content" />
          {cta && (
            <Link
              className="button button--brown"
              to={`/${cta?.ctaPageLink[0].slug.current}`}
            >
              {cta.title}
            </Link>
          )}
        </div>
      </div>
      {hasWaveDown && <Wavify direction="down" bgcolor="#ffffff" />}
    </TwoColumnsStyles>
  );
}
