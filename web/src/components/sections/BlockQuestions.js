/* eslint-disable react/display-name */
import React from 'react';
import styled from 'styled-components';
import Wavify from '../Wave';
import PortableText from '../PortableText';
import Accordion from '../Accordion';
import Overprint from '../../assets/images/logo-neoden-grey-seul.inline.svg';

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
  return 'var(--section-bot-padding)';
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

const BlockFAQStyles = styled.section`
  padding-bottom: ${(props) => handleLocation(props)};
  padding-top: ${(props) =>
    props.hasWaveUp ? '0' : 'calc(var(--section-top-padding) * 2)'};
  position: relative;
  z-index: ${(props) => handleZIndex(props)};

  .section-title {
    margin-bottom: 1.75rem;
  }
  .accordion-container {
    border-top: 1px solid var(--beige);
  }
  .faq__footer {
    padding-top: 2.125rem;
    text-align: center;
  }
  .button {
    display: inline-block;
    margin: 0 auto;
  }
`;

const BlockQuestions = ({
  title,
  questions,
  pdf,
  hasDoubleBotMargin,
  hasWaveDown,
  hasWaveUp,
}) => (
  <>
    <Overprint className="overprintLogo overprintLogo--left" />
    <BlockFAQStyles
      hasDoubleBotMargin={hasDoubleBotMargin}
      hasWaveDown={hasWaveDown}
      hasWaveUp={hasWaveUp}
      className="section section__faq"
    >
      {hasWaveUp && <Wavify direction="up" bgcolor="#ffffff" />}
      <div className="container container--md">
        <h2 className="section-title">{title}</h2>
        <div className="accordion-container">
          {questions.map((question) => (
            <Accordion key={question.id} title={question.title}>
              <PortableText blocks={question._rawReponse} />
            </Accordion>
          ))}
        </div>
        {pdf && (
          <div className="faq__footer">
            <a
              href={pdf.asset.url}
              target="_blank"
              className="button button--brown"
              rel="noreferrer"
            >
              Accéder à la FAQ
            </a>
          </div>
        )}
      </div>
      {hasWaveDown && <Wavify direction="down" bgcolor="#ffffff" />}
    </BlockFAQStyles>
  </>
);

export default BlockQuestions;
