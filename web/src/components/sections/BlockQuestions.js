import React from 'react';
import styled from 'styled-components';
import PortableText from '../PortableText';
import Accordion from '../Accordion';
import Wave from '../Wave';

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

export default function BlockQuestions({
  title,
  questionsList,
  hasDoubleBotMargin,
  hasWaveDown,
  hasWaveUp,
}) {
  return (
    <BlockFAQStyles
      hasDoubleBotMargin={hasDoubleBotMargin}
      hasWaveDown={hasWaveDown}
      hasWaveUp={hasWaveUp}
      className="section section__faq"
    >
      {hasWaveUp && <Wave bgcolor="white" />}
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
      {hasWaveDown && <Wave bgcolor="white" reversed />}
    </BlockFAQStyles>
  );
}
