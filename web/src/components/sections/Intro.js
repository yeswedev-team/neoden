import React from 'react';
import styled from 'styled-components';
import PortableText from '../PortableText';
import Wave from '../Wave';

const IntroTextStyles = styled.section`
  background: ${({ location }) =>
    location === 'home' ? 'var(--grey)' : 'var(--white)'};
  background-size: cover, cover;
  background-attachment: fixed, fixed;
  /* padding-top: var(--section-top-padding); */
  text-align: center;
  z-index: 3;
`;

const Intro = ({ context, overtitle, title, text, hasWave }) => (
  <IntroTextStyles
    location={context}
    className={`section section__intro${
      hasWave ? ' has-wave-bt has-wave-up' : ''
    }`}
  >
    {context === 'home' ? <Wave bgcolor="#F2F2F2" /> : <Wave bgcolor="white" />}
    <div className="container container--md">
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
