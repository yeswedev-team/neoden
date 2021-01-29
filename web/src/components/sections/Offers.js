/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from '@reach/router';
import queryString from 'query-string';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import Wavify from '../Wave';
import encoche from '../../assets/images/encoche.gif';
import { pxtopc } from '../../styles/Mixins';
import { mq } from '../../styles/breakpoints';
import Service from '../Service';

const SectionOfferStyles = styled.section`
  padding-bottom: ${(props) =>
    props.hasWaveDown ? '0' : 'var(--section-bot-padding)'};
  padding-top: ${(props) =>
    props.hasWaveUp ? '0' : 'var(--section-top-padding)'};
  position: relative;
  z-index: 3;

  .tabs-titles {
    display: none;
    gap: 2.5rem;
    justify-content: space-between;
    list-style: none;
    padding: 0px;
    margin: 0;

    ${mq[1]} {
      display: flex;
    }
  }

  .options-titles {
    ${mq[1]} {
      display: none;
    }
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

    &:hover {
      .filter {
        filter: grayscale(0) opacity(0.25);
      }
    }
  }
  .tab-title-alt {
    background: var(--brown);
    filter: none;
    flex-basis: 100%;
    height: 5.75rem;
    margin-bottom: 1.25rem;
    padding: 0;

    &:last-child {
      margin-bottom: 0;
    }

    &:hover .filter {
      filter: grayscale(0) opacity(0.1);
    }

    ${mq[1]} {
      flex-basis: 30%;
      margin-bottom: 0;
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
    ${mq[1]} {
      border-top: 1px solid var(--brownlighter);
      margin: 21px 0 0 0;
    }
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
    margin-top: 2.8125rem;
    text-align: center;
  }
  .tabs-titles-alt {
    display: flex;
    flex-wrap: wrap;
    gap: 1.875rem;
    margin: 1.3125rem auto;
    max-width: 36.25rem;

    li {
      width: 100%;
    }

    ${mq[1]} {
      flex-wrap: nowrap;

      li {
        width: auto;
      }
    }
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

  const offersContainerRef = useRef(null);

  const location = useLocation();
  const visibleTabValue =
    (location.search && getSelectedOffer(location.search)) || 'flottaison';

  let windowWidth = 0;

  if (typeof window !== 'undefined') {
    windowWidth = window.innerWidth;
  }

  const [width, setWidth] = React.useState(windowWidth);
  const breakpoint = 768;
  const [visibleTab, setVisibleTab] = useState(visibleTabValue);
  const [dropdown, setDropdown] = useState(visibleTabValue);

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);

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

  const listOptions = offer.map((item) => (
    <option key={item.id} value={item.slug.current}>
      {item.title}
    </option>
  ));

  const handleAltTabClick = (event, item) => {
    event.preventDefault();
    setVisibleTab(item.slug.current);
    if (typeof window !== 'undefined') {
      gsap.to(window, {
        duration: 0.7,
        scrollTo: { y: offersContainerRef.current, offsetY: 100 },
        ease: 'power2',
      });
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

  const listContent = offer.map((item) => {
    if (width > breakpoint) {
      return (
        <div
          key={`item-${item.slug.current}`}
          style={visibleTab === item.slug.current ? {} : { display: 'none' }}
        >
          {item.services.map((service) => (
            <Service key={service.id} service={service} />
          ))}
        </div>
      );
    }
    return (
      <div
        key={`item-${item.slug.current}`}
        style={dropdown === item.slug.current ? {} : { display: 'none' }}
      >
        {item.services.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    );
  });

  return (
    <SectionOfferStyles
      hasWaveDown={hasWaveDown}
      hasWaveUp={hasWaveUp}
      className={`section section__offers${
        hasWaveDown ? ' has-wave-down' : ''
      }${hasWaveUp ? ' has-wave-up' : ''}`}
    >
      {hasWaveUp && <Wavify direction="up" bgcolor="#ffffff" />}
      <div className="container container--md" ref={offersContainerRef}>
        <div className="tabs">
          <ul className="tabs-titles">{listTitles}</ul>
          <select
            value={dropdown}
            className="options-titles select-css"
            onChange={(e) => setDropdown(e.target.value)}
          >
            {listOptions}
          </select>
          <div className="tab-content">{listContent}</div>
          <h4 className="middle-title">Découvrir aussi&nbsp;:</h4>
          <ul className="tabs-titles-alt">{listTitlesAlt}</ul>
        </div>
      </div>
      {hasWaveDown && <Wavify direction="down" bgcolor="#ffffff" />}
    </SectionOfferStyles>
  );
}
