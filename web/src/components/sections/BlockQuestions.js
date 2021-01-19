import React from 'react';
import styled from 'styled-components';
import PortableText from '../PortableText';
import Accordion from '../Accordion';
import Wave from '../Wave';
import Logo from '../../assets/images/logo-neoden-grey.inline.svg';

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

  .overprint-container {
    height: 400px;
    position: absolute;
    overflow: hidden;
    /* top: 0; */
    transform: translate(-50%, -14%);
  }

  .overprint {
    height: 100%;
    /* bottom: 4em;
    left: clamp(-42rem, -35vw, -33.75rem);
    position: absolute;
    width: clamp(38rem, 55vw, 54.375rem);
    z-index: -1; */
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
      <div className="overprint-container">
        <Logo className="overprint" />
      </div>
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
