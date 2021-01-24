import React from 'react';
import styled from 'styled-components';
import Flickity from 'react-flickity-component';
import { mq } from '../../styles/breakpoints';
import '../../styles/flickity.css';
import PortableText from '../PortableText';
import Wavify from '../Wave';
import tressageBg from '../../assets/images/tressage-pattern.jpg';

const handleLocation = (props) => {
  if (!props.hasWaveDown && props.hasDoubleBotMargin) {
    return 'calc(var(--section-bot-padding) * 2.5)';
  }
  if (
    (props.hasWaveDown && props.hasDoubleBotMargin) ||
    (props.hasWaveDown && !props.hasDoubleBotMargin)
  ) {
    return '0';
  }
  return 'calc(var(--section-bot-padding) / 2)';
};

const BlockMembersStyles = styled.section`
  background: #a5968f url(${tressageBg}) 0 0 repeat;
  background-blend-mode: multiply;
  color: var(--white);
  padding-bottom: ${(props) => handleLocation(props)};
  padding-top: ${(props) =>
    props.hasWaveUp ? '0' : 'var(--section-top-padding)'};
  text-align: center;

  > .container:first-child {
    max-width: none;
    width: 100%;
  }

  .privileges__header {
    text-align: center;
  }
  .list-privileges {
    margin-top: 3.125rem;
  }

  .privilege {
    display: flex;
    flex-direction: column;
    margin-right: 2.5rem;
    margin-bottom: 1.5625rem;
    width: 50%;

    &__illustr {
      align-items: center;
      display: flex;
      justify-content: center;
      position: relative;
      width: 100%;

      ${mq[0]} {
        width: 7.75rem;
      }

      &--icon {
        position: absolute;
      }
    }

    &__content {
      text-align: center;
      padding-top: 1em;

      h3 {
        font-size: 1.5rem;
        margin: 0;
      }

      .block > *:first-child {
        margin: 0.25em 0 0;
      }

      ${mq[0]} {
        max-width: 13.3125rem;
        padding-left: 13px;
        text-align: left;
      }
    }

    ${mq[0]} {
      flex-direction: row;
      width: 50%;
    }
    ${mq[1]} {
      width: 45%;
    }

    ${mq[2]} {
      width: 21.25rem;
    }
  }

  .block {
    font-size: 0.9375rem;
  }
  .button {
    display: inline-block;
    margin: 35px auto 0;
  }
`;

export default function BlockMembers({
  title,
  subtitle,
  privilegeList,
  buttonTitle,
  membersLink,
  hasWaveDown,
  hasWaveUp,
  hasDoubleBotMargin,
}) {
  const flickityOptions = {
    initialIndex: 1,
    prevNextButtons: false,
    pageDots: false,
  };

  return (
    <BlockMembersStyles
      hasWaveDown={hasWaveDown}
      hasWaveUp={hasWaveUp}
      hasDoubleBotMargin={hasDoubleBotMargin}
      className={`section section__members${
        hasWaveDown ? ' has-wave-down' : ''
      }${hasWaveUp ? ' has-wave-up' : ''}`}
    >
      {hasWaveUp && <Wavify direction="up" bgcolor="#ffffff" />}
      <div className="container">
        <div className="privileges__header container container--sm">
          {title && <h2 className="section-title">{title}</h2>}
          {subtitle && (
            <p>
              <strong>{subtitle}</strong>
            </p>
          )}
        </div>
        <Flickity
          className="list-privileges"
          options={flickityOptions} // takes flickity options {}
        >
          {privilegeList.map((privilege) => (
            <div key={privilege._key} className="privilege">
              <div className="privilege__illustr">
                <img src={privilege.bgicon.asset.fluid.src} alt="" />
                <img
                  src={privilege.icon.asset.fluid.src}
                  alt={privilege.title}
                  className="privilege__illustr--icon"
                />
              </div>
              <div className="privilege__content">
                <h3>{privilege.title}</h3>
                {privilege._rawText && (
                  <PortableText blocks={privilege._rawText} />
                )}
              </div>
            </div>
          ))}
        </Flickity>
        <a href={membersLink} className="button">
          {buttonTitle || 'Découvrir'}
        </a>
      </div>
      {hasWaveDown && <Wavify direction="down" bgcolor="#ffffff" />}
    </BlockMembersStyles>
  );
}
