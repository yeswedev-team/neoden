import React from 'react';
import styled from 'styled-components';
import { getBlogUrl } from '../../utils/helpers';
import Wavify from '../Wave';
import Button from '../Button';
import KalendesWidget from '../KalendesWidget';

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
  let target;

  if (link[0]) {
    if (link[0]._type === 'post') {
      target = getBlogUrl(link[0].publishedAt, link[0].slug.current);
    } else {
      target = `/${link[0].slug.current}`;
    }
  }

  return (
    <BlockCtaStyles hasDoubleBotMargin={hasDoubleBotMargin} className="section">
      <Wavify direction="up" bgcolor="#ffffff" />
      <div className="container container--xs">
        <h2 className="middle-title">{title}</h2>
        { buttonTitle == 'Nous contacter' ? (
          <KalendesWidget className="button button--brown" title="Nous contacter"/>
        ) : (
          <Button styles="brown" title={buttonTitle} target={target} />
        )}
      </div>
      <Wavify direction="down" bgcolor="#ffffff" />
    </BlockCtaStyles>
  );
}
