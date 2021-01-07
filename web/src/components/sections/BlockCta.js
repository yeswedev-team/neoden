import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import Wave from '../Wave';

const BlockCtaStyles = styled.section`
  /* padding-bottom: calc(var(--section-bot-padding) * 1.2); */
  /* padding-top: var(--section-top-padding); */
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

export default function Cta({ title, buttonTitle, link }) {
  return (
    <BlockCtaStyles className="section">
      <Wave bgcolor="white" />
      <div className="container container--xs">
        <h2 className="middle-title">{title}</h2>
        <Button
          styles="brown"
          title={buttonTitle}
          target={link[0].slug.current}
        />
      </div>
      <Wave bgcolor="white" reversed />
    </BlockCtaStyles>
  );
}
