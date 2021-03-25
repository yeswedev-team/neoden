/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import styled from 'styled-components';
import Wavify from '../Wave';
import PortableText from '../PortableText';
import { mq } from '../../styles/breakpoints';
import { calcClamp } from '../../styles/Mixins';

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

const FormSendinBlueStyles = styled.section`
  background-color: #f2f2f2;
  padding-bottom: ${(props) => handleLocation(props)};
  padding-top: ${(props) =>
    props.hasWaveUp ? '0' : 'var(--section-top-padding)'};
  position: relative;
  z-index: ${(props) => handleZIndex(props)};

  .container {
    background: var(--white);
    padding: 4.0625rem 5% 5rem;
    position: relative;
    z-index: 4;

    ${mq[2]} {
      margin-top: -10rem;
      padding: 3.125rem 7.3125rem 5rem;
    }
  }

  .block {
    .heading-2 {
      font-size: 2.1875rem;
      font-weight: normal;
      line-height: 1;
      margin-top: 1.5rem;
    }
    .heading-3 {
      font-size: 1.5rem;
      font-weight: normal;
      line-height: 1;
      margin-top: 2rem;
    }
    figure {
      margin: 2em -1em;
    }
    blockquote {
      font-family: var(--font-titles);
      font-size: ${calcClamp(2.6628, 3.4375)};
      font-weight: normal;
      line-height: 1;
      margin: 1rem 0;
      text-align: center;

      ${mq[0]} {
        margin: 1rem 2.5rem;
      }
    }
  }

  .button {
    margin-top: 1.625rem;
  }
`;

export default function FormSendinBlue({
  src,
  width,
  height,
  hasDoubleBotMargin,
  hasWaveDown,
  hasWaveUp,
}) {
  const iframeWidth = width || '100%';
  const iframeHeight = height || '100%';

  return (
    <FormSendinBlueStyles
      hasDoubleBotMargin={hasDoubleBotMargin}
      hasWaveDown={hasWaveDown}
      hasWaveUp={hasWaveUp}
      className="section"
    >
      {hasWaveUp && <Wavify direction="up" bgcolor="#f2f2f2" />}
      <iframe
        width={iframeWidth}
        height={iframeHeight}
        src={src}
        frameBorder="0"
        scrolling="auto"
        allowFullScreen
        style={{
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: '100%',
        }}
      />
      {hasWaveDown && <Wavify direction="down" bgcolor="#f2f2f2" />}
    </FormSendinBlueStyles>
  );
}
