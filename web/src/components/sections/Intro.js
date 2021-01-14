import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import PortableText from '../PortableText';
import Wave from '../Wave';

const IntroTextStyles = styled.section`
  background: ${({ location }) =>
    location === 'home' ? 'var(--grey)' : 'var(--white)'};
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
      <Wave bgcolor={`${context === 'home' ? '#F2F2F2' : 'white'}`} />
    )}
    <div className="container container--md">
      {frontImage && <Img fluid={frontImage?.image.asset.fluid} alt={title} />}
      {overtitle && <p className="overtitle">{overtitle}</p>}
      {title && <h2 className="section-title">{title}</h2>}
      {text && <PortableText blocks={text} />}
    </div>
    {hasWaveDown && (
      <Wave bgcolor={`${context === 'home' ? '#F2F2F2' : 'white'}`} reversed />
    )}
  </IntroTextStyles>
);

export default Intro;
