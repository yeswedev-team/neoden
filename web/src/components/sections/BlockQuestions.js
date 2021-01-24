/* eslint-disable react/display-name */
import React, { forwardRef } from 'react';
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

const BlockFAQStyles = styled.section`
  padding-bottom: ${(props) => handleLocation(props)};
  padding-top: ${(props) =>
    props.hasWaveUp ? '0' : 'var(--section-top-padding)'};
  position: relative;
  z-index: 3;

  .section-title {
    margin-bottom: 1.75rem;
  }
  .accordion-container {
    border-top: 1px solid var(--beige);
  }
`;

const BlockQuestions = forwardRef(
  ({ title, questionsList, hasDoubleBotMargin, hasWaveDown, hasWaveUp }) => (
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
            {questionsList.map((question) => (
              <Accordion key={question.id} title={question.title}>
                <PortableText blocks={question._rawReponse} />
              </Accordion>
            ))}
          </div>
        </div>
        {hasWaveDown && <Wavify direction="down" bgcolor="#ffffff" />}
      </BlockFAQStyles>
    </>
  )
);

export default BlockQuestions;
