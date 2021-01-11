import React from 'react';
import styled from 'styled-components';
import PortableText from '../PortableText';
import Wave from '../Wave';
import tressageBg from '../../assets/images/tressage-pattern.jpg';

const BlockMembersStyles = styled.section`
  background: #a5968f url(${tressageBg}) 0 0 repeat;
  background-blend-mode: multiply;
  color: var(--white);
  padding-bottom: ${(props) =>
    props.hasWaveDown ? '0' : 'var(--section-bot-padding)'};
  padding-top: ${(props) =>
    props.hasWaveUp ? '0' : 'var(--section-top-padding)'};
  text-align: center;

  .privileges__header {
    text-align: center;
  }
  .list-privileges {
    display: flex;
    flex-wrap: wrap;
    gap: 1.875rem;
    justify-content: center;
    margin-top: 3.125rem;
  }
  .privilege {
    display: flex;
    margin-bottom: 1.5625rem;

    &__illustr {
      align-items: center;
      display: flex;
      justify-content: center;
      position: relative;
      width: 7.75rem;

      &--icon {
        position: absolute;
      }
      &:first-child {
        
      }
    }

    &__content {
      max-width: 13.3125rem;
      padding-left: 13px;
      text-align: left;
    }
  }
  .privilege__content {
    padding-top: 1em;

    h3 {
      font-size: 1.5rem;
      margin: 0;
    }

    .block > *:first-child {
      margin: 0.25em 0 0;
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
}) {
  return (
    <BlockMembersStyles
      hasWaveDown={hasWaveDown}
      hasWaveUp={hasWaveUp}
      className="section section__members"
    >
      {hasWaveUp && <Wave bgcolor="white" />}
      <div className="container container--xl">
        <div className="privileges__header container container--sm">
          {title && <h2 className="section-title">{title}</h2>}
          {subtitle && (
            <p>
              <strong>{subtitle}</strong>
            </p>
          )}
        </div>
        <div className="list-privileges">
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
        </div>
        <a href={membersLink} className="button">
          {buttonTitle || 'Découvrir'}
        </a>
      </div>
      {}
    </BlockMembersStyles>
  );
}
