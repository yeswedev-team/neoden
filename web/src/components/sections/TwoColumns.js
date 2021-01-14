import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import PortableText from '../PortableText';
import Wave from '../Wave';

const handleLocation = (props) => {
  console.log(props);
  if (
    (props.hasWaveDown && props.hasDoubleBotMargin) ||
    (!props.hasWaveDown && props.hasDoubleBotMargin)
  ) {
    return 'calc(var(--section-bot-padding) * 2)';
  }
  if (props.hasWaveDown && !props.hasDoubleBotMargin) {
    return '0';
  }
  return 'calc(var(--section-bot-padding) / 2)';
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
  hasWaveUp,
  hasWaveDown,
  hasDoubleBotMargin,
  rightImage,
}) {
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
      {hasWaveUp && <Wave bgcolor="white" />}
      <div className="container container--lg">
        <div className="col">
          <Img className="back-img" fluid={image.asset.fluid} alt="" />
        </div>
        <div className="col col__content">
          <PortableText blocks={text} id="text-content" />
        </div>
      </div>
      {hasWaveDown && <Wave bgcolor="white" reversed />}
    </TwoColumnsStyles>
  );
}
