/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { useLocation } from '@reach/router';
import queryString from 'query-string';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import encoche from '../../assets/images/encoche.gif';
import { pxtopc } from '../../styles/Mixins';
import Wave from '../Wave';
import Service from '../Service';

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
    background-color: var(--brown);
    background-size: cover;
    border-radius: var(--radius);
    color: var(--white);
    cursor: pointer;
    display: flex;
    flex-direction: column;
    flex-basis: 30%;
    flex-grow: 1;
    flex-shrink: 0;
    font-family: var(--font-titles);
    font-size: 1.875rem;
    height: 10.0625rem;
    justify-content: center;
    line-height: 1;
    position: relative;
    text-align: center;

    .filter {
      background-size: cover;
      border-radius: var(--radius);
      display: block;
      filter: grayscale(0.4) opacity(0.7);
      height: 100%;
      transition: filter 400ms linear;
    }
    span {
      display: block;
      left: 50%;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .tab-title-alt {
    background: var(--brown);
    filter: none;
    height: 5.75rem;
    padding: 0;

    &:hover .filter {
      filter: grayscale(0) opacity(0.1);
    }
  }

  .tab-title-active {
    background-image: none !important;
  }

  .tab-title--active {
    background-color: var(--brown);
    filter: none;

    .filter {
      background-image: none !important;
    }

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
      cursor: pointer;
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

const getSelectedOffer = (query) => {
  const fallback = 'flottaison';

  if (query) {
    const queriedOffer = queryString.parse(query);
    const { offer } = queriedOffer;

    // Ensure a value is passed
    if (offer) {
      return offer;
    }

    return fallback;
  }

  return fallback;
};

export default function Offers({ offer, hasWaveDown, hasWaveUp }) {
  gsap.registerPlugin(ScrollToPlugin);

  const location = useLocation();
  const visibleTabValue =
    (location.search && getSelectedOffer(location.search)) || 'flottaison';

  const [visibleTab, setVisibleTab] = useState(visibleTabValue);

  const listTitles = offer.map((item) => (
    <li
      key={item.id}
      id={item.slug.current}
      onClick={() => setVisibleTab(item.slug.current)}
      className={
        visibleTab === item.slug.current
          ? 'tab-title tab-title--active'
          : 'tab-title'
      }
    >
      <div
        className="filter"
        style={{ backgroundImage: `url(${item.imageTab.asset.fluid.src})` }}
      />
      <span>{item.title}</span>
    </li>
  ));

  const handleAltTabClick = (event, item) => {
    event.preventDefault();
    setVisibleTab(item.slug.current);
    if (typeof window !== 'undefined') {
      gsap.to(window, { duration: 0.7, scrollTo: 0, ease: 'power2' });
    }
  };

  const listTitlesAlt = offer.map((item) => {
    if (item.slug.current !== visibleTab) {
      return (
        <li
          key={item.id}
          onClick={(event) => handleAltTabClick(event, item)}
          className={
            visibleTab === item.slug.current
              ? 'tab-title-alt tab-title-alt--active'
              : 'tab-title-alt'
          }
        >
          <div
            className="filter"
            style={{ backgroundImage: `url(${item.imageAlt.asset.fluid.src})` }}
          />
          <span>{item.title}</span>
        </li>
      );
    }
    return null;
  });

  const listContent = offer.map((item) => (
    <div
      key={`item-${item.slug.current}`}
      style={visibleTab === item.slug.current ? {} : { display: 'none' }}
    >
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
