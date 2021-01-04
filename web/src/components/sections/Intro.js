import React from 'react';
import styled from 'styled-components';
import PortableText from '../PortableText';
import WaveBg from '../../assets/images/wave-greylight.svg';

const IntroTextStyles = styled.section`
  background: var(--grey);
  background-size: cover, cover;
  background-attachment: fixed, fixed;
  padding-top: var(--section-top-padding);
  text-align: center;

  .wave-reverse-up,
  .wave-reverse-up-bis {
    background: url(${WaveBg}) 0 0 repeat;
    /*height from the svg file*/
    height: 70px;
    transform: translateY(-100%);
  }

  .wave-down,
  .wave-down-bis {
    background: url(${WaveBg}) 0 0 repeat;
    /*height from the svg file*/
    height: 70px;
    transform: translateY(100%);
  }
`;

const Intro = ({ title, text, hasWave }) => (
  <IntroTextStyles
    className={`section intro-text${hasWave ? ' has-wave-bt has-wave-up' : ''}`}
  >
    {hasWave && (
      <>
        <div className="wave-reverse-up" />
        <div className="wave-reverse-up-bis" />
      </>
    )}
    <div className="container container--md">
      {title && <h2 className="section-title">{title}</h2>}
      {text && <PortableText blocks={text} />}
    </div>
    {hasWave && (
      <>
        <div className="wave-down" />
        <div className="wave-down-bis" />
      </>
    )}
  </IntroTextStyles>
);

export default Intro;
