import React from 'react';
import styled from 'styled-components';
import Wavify from '../Wave';
import Button from '../Button';

const BlockCtaStyles = styled.section`
  /* padding-bottom: calc(var(--section-bot-padding) * 1.2); */
  /* padding-top: var(--section-top-padding); */
  padding-bottom: ${(props) =>
    props.hasDoubleBotMargin ? 'calc(var(--section-bot-padding) * 2)' : '0'};
  position: relative;
  z-index: 3;

  .container {
    text-align: center;
  }

  .middle-title {
    text-align: center;
  }
  .button {
    margin-top: 1.625rem;
  }
`;

export default function Cta({ title, buttonTitle, link, hasDoubleBotMargin }) {
  return (
    <BlockCtaStyles hasDoubleBotMargin={hasDoubleBotMargin} className="section">
      <Wavify direction="up" bgcolor="#ffffff" />
      <div className="container container--xs">
        <h2 className="middle-title">{title}</h2>
        <Button
          styles="brown"
          title={buttonTitle}
          target={link[0].slug.current}
        />
      </div>
      <Wavify direction="down" bgcolor="#ffffff" />
    </BlockCtaStyles>
  );
}
