import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import styled from 'styled-components';
import PortableText from '../PortableText';
import Wave from '../Wave';
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
      padding-top: calc(var(--gap) / 4);

      ${mq[2]} {
        padding-left: 2.8125rem;
      }
    }
  }
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

    ${mq[2]} {
      bottom: auto;
      transform: translate(3.75rem, 1.25rem);
      top: 12.75rem;
    }
    ${mq[3]} {
      bottom: 0;
      top: auto;
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
  const cta = data.ctas[0];
  return (
    <TwoColumnsWOIStyles
      hasWaveDown={data.hasWaveDown}
      hasWaveUp={data.hasWaveUp}
      className={`section section__columns section__columns--two${
        data.hasWaveDown ? ' has-wave-down' : ''
      }${data.hasWaveUp ? ' has-wave-up' : ''}`}
    >
      {data.hasWaveUp && <Wave bgcolor="white" />}
      <div className="container container--lg">
        <div className="col">
          <Img
            className="back-img"
            fluid={data.backImage.asset.fluid}
            alt={data.title}
          />
          <Img
            className="front-img"
            fluid={data.frontImage.asset.fluid}
            alt={data.title}
          />
        </div>
        <div className="col col__content">
          <h3 className="overtitle">{data.overtitle}</h3>
          <h2 className="section-title">{data.title}</h2>
          <PortableText blocks={data.intro} id="text-content" />
          <Link
            className="button button--brown"
            to={`/${cta.ctaPageLink[0].slug.current}`}
          >
            {cta.title}
          </Link>
        </div>
      </div>
      {data.hasWaveDown && <Wave bgcolor="white" reversed />}
    </TwoColumnsWOIStyles>
  );
}
