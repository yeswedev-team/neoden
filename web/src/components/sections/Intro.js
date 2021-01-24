import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Wavify from '../Wave';
import PortableText from '../PortableText';
import Overprint from '../../assets/images/ondes.inline.svg';

const IntroTextStyles = styled.section`
  background: ${({ location }) =>
    location === 'home' ? 'var(--grey)' : 'transparent'};
  background-size: cover, cover;
  background-attachment: fixed, fixed;
  padding-bottom: ${(props) =>
    props.hasWaveDown ? '0' : 'var(--section-bot-padding)'};
  padding-top: ${(props) =>
    props.hasWaveUp ? '0' : 'var(--section-top-padding)'};
  text-align: center;
  z-index: 3;

  img {
    border-radius: var(--radius);
  }
  .gatsby-image-wrapper {
    margin-bottom: 3.75rem;
  }
  .overtitle {
    margin-bottom: 0;
  }

  .img-container {
    position: relative;
  }

  .overprint {
    bottom: 0;
    height: 65%;
    position: absolute;
    right: 0;
    z-index: 2;
  }
`;

const Intro = ({
  context,
  frontImage,
  overtitle,
  title,
  text,
  hasWaveDown,
  hasWaveUp,
}) => (
  <IntroTextStyles
    location={context}
    hasWaveDown={hasWaveDown}
    hasWaveUp={hasWaveUp}
    className={`section section__intro${hasWaveDown ? ' has-wave-down' : ''}${
      hasWaveUp ? ' has-wave-up' : ''
    }`}
  >
    {hasWaveUp && (
      <Wavify
        direction="up"
        bgcolor={`${context === 'home' ? '#F2F2F2' : 'white'}`}
      />
    )}
    <div className="container container--md">
      {frontImage && (
        <div className="img-container">
          <Img fluid={frontImage?.image.asset.fluid} alt={title} />
          <Overprint className="overprint" />
        </div>
      )}
      {overtitle && <p className="overtitle">{overtitle}</p>}
      {title && <h2 className="section-title">{title}</h2>}
      {text && <PortableText blocks={text} />}
    </div>
    {hasWaveDown && (
      <Wavify
        direction="down"
        bgcolor={`${context === 'home' ? '#F2F2F2' : 'white'}`}
      />
    )}
  </IntroTextStyles>
);

export default Intro;
