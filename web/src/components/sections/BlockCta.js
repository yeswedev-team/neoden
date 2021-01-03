import React from 'react';
import styled from 'styled-components';
import Button from '../Button';

const BlockCtaStyles = styled.section`
  padding-bottom: var(--section-bot-padding);
  padding-top: var(--section-top-padding);

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
      <div className="container container--xs">
        <h2 className="middle-title">{title}</h2>
        <Button
          styles="brown"
          title={buttonTitle}
          target={link[0].slug.current}
        />
      </div>
    </BlockCtaStyles>
  );
}
