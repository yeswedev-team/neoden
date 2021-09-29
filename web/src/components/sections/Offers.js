/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import styled from 'styled-components';
import Wavify from '../Wave';
import { pxtopc } from '../../styles/Mixins';
import { mq } from '../../styles/breakpoints';
import Service from '../Service';

const handleZIndex = (props) => {
  if (props.hasWaveDown) {
    return '4';
  }
  if (props.hasWaveUp && !props.hasWaveDown) {
    return '3';
  }
  return '1';
};

const SectionOfferStyles = styled.section`
  padding-bottom: ${(props) =>
    props.hasWaveDown ? '0' : 'var(--section-bot-padding)'};
  padding-top: ${(props) =>
    props.hasWaveUp ? '0' : 'var(--section-top-padding)'};
  position: relative;
  z-index: ${(props) => handleZIndex(props)};

  .container {
    border-top: 1px solid var(--brownlighter);
    position: relative;
  }

  .service {
    background-color: var(--white);
    border-bottom: 1px solid var(--brownlighter);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 1.875rem 0;

    &__content,
    .gatsby-image-wrapper {
      width: 100%;
    }

    ${mq[1]} {
      border: 1px solid var(--brownlighter);
      border-top: none;
      padding: 1.875rem;

      &:nth-child(even) {
        .gatsby-image-wrapper {
          order: 1;
        }
        .service__content {
          order: 2;
        }
      }
      .gatsby-image-wrapper {
        width: ${pxtopc(351, 820)};
      }
      &__content {
        width: ${pxtopc(398, 821)};
      }
    }

    &__title {
      font-size: 1.25rem;
      font-weight: normal;
      line-height: calc(23 / 20);
    }
    svg {
      margin-left: 0.4375rem;
    }
  }
  .actions {
    margin-bottom: 1rem;

    > .button:last-child {
      cursor: pointer;
      margin-left: 1.125rem;
    }

    ${mq[1]} {
      margin-bottom: 0;
    }
  }
  .middle-title {
    display: none;
    margin-top: 2.8125rem;
    text-align: center;

    ${mq[1]} {
      display: block;
    }
  }
  .tabs-titles-alt {
    display: none;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 1.3125rem auto;
    max-width: 36.25rem;

    ${mq[1]} {
      display: flex;
    }

    &.long {
      justify-content: space-between;
      max-width: none;

      li {
        ${mq[1]} {
          width: 30%;
        }
      }
    }

    li {
      width: 100%;

      ${mq[1]} {
        margin-bottom: 1em;
        width: 48%;
      }
    }
  }
`;

export default function Offers({ offer, hasWaveDown, hasWaveUp }) {
  const listContent = offer.map((item) => (
    <div key={`item-${item.slug.current}`}>
      {item.services.map((service) => (
        <Service key={service.id} service={service} />
      ))}
    </div>
  ));

  return (
    <SectionOfferStyles
      hasWaveDown={hasWaveDown}
      hasWaveUp={hasWaveUp}
      className={`section section__offers${
        hasWaveDown ? ' has-wave-down' : ''
      }${hasWaveUp ? ' has-wave-up' : ''}`}
    >
      {hasWaveUp && <Wavify direction="up" bgcolor="#ffffff" />}
      <div className="container container--md">
        <div className="tabs">
          <div className="tab-content">{listContent}</div>
        </div>
      </div>
      {hasWaveDown && <Wavify direction="down" bgcolor="#ffffff" />}
    </SectionOfferStyles>
  );
}
