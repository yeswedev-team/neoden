/* eslint-disable prefer-destructuring */
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { getBlogUrl } from '../../utils/helpers';
import Wavify from '../Wave';
import PortableText from '../PortableText';
import { mq } from '../../styles/breakpoints';

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
      text-align: center;

      h2,
      h3 {
        color: var(--beige);
        font-size: 3.125rem;
        font-weight: normal;
      }

      ${mq[1]} {
        text-align: left;
      }
    }
  }
  .gatsby-image-wrapper,
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
  let cta;
  let link;
  if (ctas[0]) {
    cta = ctas[0].ctaPageLink[0];
    if (cta._type === 'post') {
      link = getBlogUrl(cta.publishedAt, cta.slug.current);
    } else {
      link = `/${cta.slug.current}`;
    }
  }

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
          {link ? (
            <Link className="grow" to={link}>
              <Img className="back-img" fluid={image.asset.fluid} alt="" />
            </Link>
          ) : (
            <Img className="back-img" fluid={image.asset.fluid} alt="" />
          )}
        </div>
        <div className="col col__content">
          <PortableText blocks={text} id="text-content" />
          {link && (
            <Link className="button button--brown" to={link}>
              {ctas[0].title}
            </Link>
          )}
        </div>
      </div>
      {hasWaveDown && <Wavify direction="down" bgcolor="#ffffff" />}
    </TwoColumnsStyles>
  );
}
