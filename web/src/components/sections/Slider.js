import React from 'react';
import styled from 'styled-components';
import Wave from '../Wave';

const SliderStyles = styled.section`
  background-color: var(--grey);
  padding-bottom: ${(props) =>
    props.hasWaveDown ? '0' : 'var(--section-bot-padding)'};
  padding-top: ${(props) =>
    props.hasWaveUp ? '0' : 'var(--section-top-padding)'};
  position: relative;
  z-index: 3;
`;

export default function Slider({
  title,
  overtitle,
  text,
  slides,
  hasWaveUp,
  hasWaveDown,
}) {
  return (
    <SliderStyles hasWaveDown={hasWaveDown} hasWaveUp={hasWaveUp}>
      {hasWaveUp && <Wave bgcolor="#F2F2F2" />}
      <div className="container container--md">
        {overtitle && <p className="overtitle">{overtitle}</p>}
        {title && <h2 className="section-title">{title}</h2>}
      </div>
      {hasWaveDown && <Wave bgcolor="#F2F2F2" reversed />}
    </SliderStyles>
  );
}
