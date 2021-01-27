/* eslint-disable prefer-destructuring */
import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { getBlogUrl } from '../../utils/helpers';
import Wavify from '../Wave';
import PortableText from '../PortableText';
import { pxtopc } from '../../styles/Mixins';
import { mq } from '../../styles/breakpoints';

const TwoColumnsWOIStyles = styled.section`
  padding-bottom: 0;
  padding-bottom: ${(props) =>
    props.hasWaveDown ? '0' : 'var(--section-bot-padding)'};
  padding-top: ${(props) =>
    props.hasWaveUp ? '0' : 'var(--section-top-padding)'};
  position: relative;
  z-index: 3;

  .col {
    position: relative;

    &__content {
      padding-top: var(--gap);
      text-align: center;

      ${mq[1]} {
        text-align: left;
      }

      ${mq[2]} {
        padding-left: 2.8125rem;
        padding-top: calc(var(--gap) / 4);
      }
    }
  }
  .gatsby-image-wrapper,
  img {
    border-radius: 8px;
  }
  .back-img {
    max-width: ${pxtopc(448, 485)};
  }
  .front-img {
    bottom: 0;
    width: ${pxtopc(260, 485)};
    position: absolute !important;
    right: 0;
    transform: translate(0, 1.25rem);

    ${mq[1]} {
      bottom: auto;
      top: 12.75rem;
      transform: translate(0, -1.25rem);
    }
    ${mq[2]} {
      transform: translate(3.75rem, 1.25rem);
    }
    ${mq[3]} {
      bottom: 0;
      top: auto;
      transform: translate(3.75rem, 1.25rem);
    }
  }
  .section-title {
    margin-top: 0.3125rem;
  }
  .text-content {
    > *:first-child {
      margin-top: 1.4375rem;
    }
  }
  .button {
    margin-top: calc(var(--gap) * 0.4);
  }
`;

export default function TwoColumnsWithOverlayedImages(data) {
  let link;
  const cta = data.ctas[0].ctaPageLink[0];
  if (cta._type === 'post') {
    link = getBlogUrl(cta.publishedAt, cta.slug.current);
  } else {
    link = `/${cta.slug.current}`;
  }

  return (
    <TwoColumnsWOIStyles
      hasWaveDown={data.hasWaveDown}
      hasWaveUp={data.hasWaveUp}
      className={`section section__columns section__columns--two${
        data.hasWaveDown ? ' has-wave-down' : ''
      }${data.hasWaveUp ? ' has-wave-up' : ''}`}
    >
      {data.hasWaveUp && <Wavify direction="up" bgcolor="#ffffff" />}
      <div className="container container--lg">
        <div className="col">
          <Link to={link} className="grow">
            <Img
              className="back-img"
              fluid={data.backImage.asset.fluid}
              alt={data.title}
            />
          </Link>
          <Link to={link} className="grow">
            <Img
              className="front-img"
              fluid={data.frontImage.asset.fluid}
              alt={data.title}
            />
          </Link>
        </div>
        <div className="col col__content">
          <h3 className="overtitle">{data.overtitle}</h3>
          <h2 className="section-title">{data.title}</h2>
          <PortableText blocks={data.intro} id="text-content" />
          <Link className="button button--brown" to={link}>
            {data.ctas[0].title}
          </Link>
        </div>
      </div>
      {data.hasWaveDown && <Wavify direction="down" bgcolor="#ffffff" />}
    </TwoColumnsWOIStyles>
  );
}
