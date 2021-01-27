/* eslint-disable prefer-destructuring */
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { getBlogUrl } from '../utils/helpers';
import Wavify from './Wave';
import Logo from '../assets/images/logo-neoden-seul.inline.svg';
import Button from './Button';
import PortableText from './PortableText';
import Breadcrumb from './Breadcrumb';
import { mq } from '../styles/breakpoints';

const handleLocation = (location) => {
  switch (location) {
    case 'home':
      return '0 2.5rem';
    case 'flottaison-isolation-sensorielle':
      return '0 16rem';
    case 'bienfaits-flottaison':
      return '0 22rem';
    case 'nous-contacter':
      return '0 22.6rem';
    default:
      return '0';
  }
};

const HeroStyles = styled.section`
  overflow: hidden;

  ${mq[3]} {
    max-height: 95vh;
  }

  + section > .container {
    ${mq[1]} {
      margin-top: ${({ location }) =>
        location === 'home' ? '0' : '-13.75rem'};
    }
  }

  + form {
    ${mq[2]} {
      margin-top: -7.5rem;
    }
  }

  .container {
    position: relative;
  }

  .page-title {
    color: var(--white);
    margin-top: 1.25rem;

    ${mq[3]} {
      padding: ${({ location }) => handleLocation(location)};
    }
  }

  .hero__intro {
    margin-top: 2em;
    font-size: ${({ location }) =>
      location === 'nous-contacter' ? '1.25rem' : '1rem'};
  }

  .hero__content {
    padding-bottom: 5rem;
    padding-top: ${({ location }) => (location === 'home' ? '0' : '2.5rem')};
    width: 100%;
    z-index: 3;

    ${mq[2]} {
      width: auto;
    }
  }

  .hero__illustr img {
    border-radius: 0;
  }

  .button {
    margin-top: 1.875rem;
  }

  .logo-only {
    margin-top: -100%;
    width: 14.5rem;

    ${mq[1]} {
      margin-top: 0;
    }
  }
`;

export default function Hero({ hero, title, titleMenu, context, location }) {
  const heroData = hero[0];
  let cta;
  let link;

  if (heroData?.cta) {
    cta = heroData.cta.ctaPageLink[0];
    if (cta._type === 'post') {
      link = getBlogUrl(cta.publishedAt, cta.slug.current);
    } else {
      link = `/${cta.slug.current}`;
    }
  }

  const sources = [
    heroData?.background.mobileImage.asset.fluid,
    {
      ...heroData?.background.desktopImage.asset.fluid,
      media: `(min-width: 768px)`,
    },
  ];

  return (
    <HeroStyles
      className={`section section__hero${
        heroData?.background ? '' : ' section__hero--boxed'
      }`}
      location={context}
    >
      {heroData?.background && (
        <div className="hero__illustr">
          <Img fluid={sources} alt={title.fr} />
        </div>
      )}
      {context !== 'home' && (
        <Breadcrumb
          location={location}
          title={title.fr}
          titleMenu={titleMenu ? titleMenu.fr : title.fr}
        />
      )}
      <div className="hero__content">
        {context === 'home' && <Wavify direction="up" bgcolor="#C2AFA5" />}
        <div
          className={`container${
            heroData?.background
              ? ' container--lg container--sm-after-md'
              : ' container--lg'
          }`}
        >
          {heroData?.hasLogo && <Logo className="logo-only" />}
          {title && <h1 className="page-title">{title.fr}</h1>}
          {heroData?._rawText && (
            <div className="container container--md hero__intro">
              <PortableText blocks={heroData._rawText} />
            </div>
          )}
          {heroData?.cta?.ctaPageLink && (
            <Button
              target={link}
              styles="transparent"
              title={heroData?.cta?.title}
            />
          )}
        </div>
      </div>
    </HeroStyles>
  );
}
