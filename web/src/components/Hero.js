/* eslint-disable prefer-destructuring */
import React from 'react';
import { GatsbyImage, getImage, withArtDirection } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { getBlogUrl } from '../utils/helpers';
import Logo from '../assets/images/logo-neoden-seul.inline.svg';
import Button from './Button';
import PortableText from './PortableText';
import Breadcrumb from './Breadcrumb';
import { mq } from '../styles/breakpoints';

const handleLocation = (location) => {
  switch (location) {
    case 'flottaison-isolation-sensorielle':
      return '0 16rem';
    case 'bienfaits-flottaison':
      return '0 10rem';
    case 'nous-contacter':
      return '0 22.6rem';
    default:
      return '0';
  }
};

const handleLocationMargin = (location) => {
  if (location === 'home') {
    return '0';
  }
  if (location === 'offres-bien-etre') {
    return '-6.75rem';
  }
  return '-13.75.rem';
};

const HeroStyles = styled.section`
  overflow: hidden;

  ${mq[3]} {
    &.has-bg {
      max-height: 95vh;
    }
  }

  ${mq[1]} {
    + .section > .container {
      margin-top: -13.75rem;
      margin-top: ${({ location }) => handleLocationMargin(location)};
    }
    + .section.section__promo > .container {
      margin-top: ${({ location }) =>
        location === 'home' ? '0' : '-13.75rem'};
    }
    + .section.section__offers > .container {
      margin-top: ${({ location }) =>
        location === 'home' ? '0' : '-10.75rem'};
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
    margin-top: 2.25rem;

    ${mq[3]} {
      margin-top: 0;
      padding: ${({ location }) => handleLocation(location)};
    }
  }

  .hero__intro {
    margin-top: 2em;
    font-size: ${({ location }) =>
      location === 'nous-contacter' ? '1.25rem' : '1rem'};
  }

  .hero__content {
    padding-bottom: ${({ location }) => (location === 'home' ? '0' : '5rem')};
    padding-top: ${({ location }) => (location === 'home' ? '0' : '4.875rem')};
    width: 100%;
    z-index: 3;

    ${mq[1]} {
      .wave-up {
        display: none !important;
      }
    }
    ${mq[2]} {
      width: auto;
    }
  }

  .hero__illustr {
    .gatsby-image-wrapper {
      > div {
        @media screen and (max-width: 767px) {
          padding-bottom: 120% !important;
        }
      }
    }
    img {
      border-radius: 0;
    }
  }

  .button {
    margin-top: 1.875rem;
  }

  .logo-only {
    margin-top: 0;
    width: 10.5rem;

    ${mq[0]} {
      width: 14.5rem;
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

  let images;
  if (
    heroData?.background &&
    heroData?.background?.desktopImage &&
    heroData?.background?.mobileImage
  ) {
    images = withArtDirection(
      getImage(heroData?.background?.desktopImage?.asset),
      [
        {
          media: '(max-width: 767px)',
          image: getImage(heroData?.background?.mobileImage?.asset),
        },
      ]
    );
  }

  return (
    <HeroStyles
      className={`section section__hero${
        heroData?.background ? ' has-bg' : ' section__hero--boxed'
      }`}
      location={context}
    >
      {heroData?.background &&
        heroData?.background?.desktopImage &&
        heroData?.background?.mobileImage && (
          <div className="hero__illustr">
            <GatsbyImage image={images} alt={title.fr} loading="eager" />
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
