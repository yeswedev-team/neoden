/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { MdCardGiftcard } from 'react-icons/md';
import { IoMdOpen } from 'react-icons/io';
import encoche from '../../assets/images/encoche.gif';
import { pxtopc } from '../../styles/Mixins';
import PortableText from '../PortableText';
import Wave from '../Wave';

const SectionOfferStyles = styled.section`
  padding-bottom: ${(props) =>
    props.hasWaveDown ? '0' : 'var(--section-bot-padding)'};
  padding-top: ${(props) =>
    props.hasWaveUp ? '0' : 'var(--section-top-padding)'};
  position: relative;
  z-index: 3;

  .tabs-titles {
    display: flex;
    gap: 2.5rem;
    justify-content: space-between;
    list-style: none;
    padding: 0px;
    margin: 0;
  }

  .tab-title,
  .tab-title-alt {
    background-size: cover;
    border-radius: var(--radius);
    color: var(--white);
    cursor: pointer;
    display: flex;
    filter: sepia(0.5) grayscale(0.4) opacity(0.7);
    flex-direction: column;
    flex-basis: 30%;
    flex-grow: 1;
    flex-shrink: 0;
    font-family: var(--font-titles);
    font-size: 1.875rem;
    justify-content: center;
    line-height: 1;
    padding: 52px 20px;
    position: relative;
    text-align: center;
  }
  .tab-title-alt {
    padding: 28px 20px;
  }

  .tab-title--active,
  .tab-title-alt--active {
    background-color: var(--brown);
    background-image: none !important;
    filter: none;

    &:after {
      border-left: 35px solid transparent;
      border-right: 35px solid transparent;
      border-top: 20px solid var(--brown);
      bottom: 0;
      content: '';
      height: 0;
      left: 50%;
      position: absolute;
      transform: translate(-50%, 100%);
      width: 0;
    }
    &:before {
      background: url(${encoche}) 0 0 no-repeat;
      bottom: 0;
      content: '';
      height: 11px;
      left: 50%;
      position: absolute;
      transform: translate(-50%, calc(100% + 21px));
      width: 33px;
    }
  }

  .tab-content {
    border-top: 1px solid var(--brownlighter);
    margin: 21px 0 0 0;
  }
  .service {
    border: 1px solid var(--brownlighter);
    border-top: none;
    display: flex;
    justify-content: space-between;
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
    > .button:last-child {
      margin-left: 1.125rem;
    }
  }
  .middle-title {
    margin-top: 2.8125rem;
    text-align: center;
  }
  .tabs-titles-alt {
    display: flex;
    gap: 1.875rem;
    margin: 1.3125rem auto;
    max-width: 36.25rem;
  }
`;

export default function Offers({ offer, hasWaveDown, hasWaveUp }) {
  const [visibleTab, setVisibleTab] = useState(offer[0].id);

  const listTitles = offer.map((item) => (
    <li
      key={item.id}
      onClick={() => setVisibleTab(item.id)}
      className={
        visibleTab === item.id ? 'tab-title tab-title--active' : 'tab-title'
      }
      style={{ backgroundImage: `url(${item.imageTab.asset.fluid.src})` }}
    >
      {item.title}
    </li>
  ));

  const listTitlesAlt = offer.map((item) => {
    console.log(item);
    if (item.id !== visibleTab) {
      return (
        <li
          key={item.id}
          onClick={() => setVisibleTab(item.id)}
          className={
            visibleTab === item.id
              ? 'tab-title-alt tab-title-alt--active'
              : 'tab-title-alt'
          }
          style={{ backgroundImage: `url(${item.imageAlt.asset.fluid.src})` }}
        >
          {item.title}
        </li>
      );
    }
    return null;
  });

  const listContent = offer.map((item) => (
    <div
      key={`item-${item.id}`}
      style={visibleTab === item.id ? {} : { display: 'none' }}
    >
      {item.services.map((service) => (
        <div key={service.id} className="service">
          <div className="service__content">
            <h3 className="service__title">{service.title}</h3>
            <PortableText blocks={service._rawText} />
            <div className="actions">
              {service.offerlink && (
                <a
                  href={service.offerlink}
                  className="button button--brownlight"
                >
                  J'offre <MdCardGiftcard />
                </a>
              )}
              {service.bookinglink && (
                <a href={service.bookinglink} className="button button--brown">
                  Je réserve <IoMdOpen />
                </a>
              )}
            </div>
          </div>
          <Img fluid={service.image.asset.fluid} />
        </div>
      ))}
    </div>
  ));

  return (
    <SectionOfferStyles
      hasWaveDown={hasWaveDown}
      hasWaveUp={hasWaveUp}
      className="section section__offers"
    >
      {hasWaveUp && <Wave bgcolor="white" />}
      <div className="container container--md">
        <div className="tabs">
          <ul className="tabs-titles">{listTitles}</ul>
          <div className="tab-content">{listContent}</div>
          <h4 className="middle-title">Découvrir aussi&nbsp;:</h4>
          <ul className="tabs-titles-alt">{listTitlesAlt}</ul>
        </div>
      </div>
      {hasWaveDown && <Wave bgcolor="white" reversed />}
    </SectionOfferStyles>
  );
}
