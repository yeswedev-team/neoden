import React from 'react';
import styled from 'styled-components';
import Wavify from '../Wave';
import PortableText from '../PortableText';

const handleLocation = (props) => {
  if (!props.hasWaveDown && props.hasDoubleBotMargin) {
    return 'calc(var(--section-bot-padding) * 2)';
  }
  if (
    (props.hasWaveDown && props.hasDoubleBotMargin) ||
    (props.hasWaveDown && !props.hasDoubleBotMargin)
  ) {
    return '0';
  }
  return '110px';
};

const handleZIndex = (props) => {
  if (props.hasWaveDown) {
    return '4';
  }
  if (props.hasWaveUp && !props.hasWaveDown) {
    return '3';
  }
  return '1';
};

const UploadStyles = styled.section`
  background-color: #f2f2f2;
  padding-bottom: ${(props) => handleLocation(props)};
  padding-top: ${(props) =>
    props.hasWaveUp ? '0' : 'var(--section-top-padding)'};
  position: relative;
  /* padding-bottom: 110px; */
  /* padding-top: 4.0625rem; */
  text-align: center;
  z-index: ${(props) => handleZIndex(props)};

  .container {
    border-top: 1px solid var(--beige);
    padding-top: 4.0625rem;
  }

  .block {
    h2,
    h3 {
      font-size: 2.1875rem;
      font-weight: normal;
      line-height: 1;
    }
  }

  .button {
    margin-top: 1.625rem;
  }
`;

export default function Upload({
  title,
  text,
  pdf,
  hasDoubleBotMargin,
  hasWaveDown,
  hasWaveUp,
}) {
  return (
    <UploadStyles
      hasDoubleBotMargin={hasDoubleBotMargin}
      hasWaveDown={hasWaveDown}
      hasWaveUp={hasWaveUp}
      className="section"
    >
      {hasWaveUp && <Wavify direction="up" bgcolor="#f2f2f2" />}
      <div className="container container--sm">
        {title && <h2 className="middle-title">{title}</h2>}
        {text && <PortableText blocks={text} />}
        <a
          href={pdf.asset.url}
          target="_blank"
          className="button button--brown"
          rel="noreferrer"
        >
          cliquez ici
        </a>
      </div>
      {hasWaveDown && <Wavify direction="down" bgcolor="#f2f2f2" />}
    </UploadStyles>
  );
}
