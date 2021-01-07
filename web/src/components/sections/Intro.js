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
  text-align: center;
  z-index: 3;

  .container {
    margin-top: ${({ location }) => (location === 'home' ? '0' : '-13.75rem')};
  }
  img {
    border-radius: var(--radius);
  }
  .overtitle {
    margin-top: 3.75rem;
  }
`;

const Intro = ({ context, frontImage, overtitle, title, text, hasWave }) => (
  <IntroTextStyles
    location={context}
    className={`section section__intro${
      hasWave ? ' has-wave-bt has-wave-up' : ''
    }`}
  >
    {context === 'home' ? <Wave bgcolor="#F2F2F2" /> : <Wave bgcolor="white" />}
    <div className="container container--md">
      {frontImage && <Img fluid={frontImage?.image.asset.fluid} alt={title} />}
      {overtitle && <p>{overtitle}</p>}
      {title && <h2 className="section-title">{title}</h2>}
      {text && <PortableText blocks={text} />}
    </div>
    {context === 'home' ? (
      <Wave bgcolor="#F2F2F2" reversed />
    ) : (
      <Wave bgcolor="white" reversed />
    )}
  </IntroTextStyles>
);

export default Intro;
