import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Logo from '../assets/images/logo-neoden-seul.inline.svg';
import Button from './Button';
import PortableText from './PortableText';

const handleLocation = (location) => {
  switch (location) {
    case 'home':
      return '0 2.5rem';
    case 'flottaison-isolation-sensorielle':
      return '0 16rem';
    default:
      return '0';
  }
};

const HeroStyles = styled.section`
  max-height: 95vh;
  overflow: hidden;

  .container {
    position: relative;
  }

  .hero__illustr--boxed {
    position: absolute;
    width: 100%;
    img {
      border-radius: var(--radius);
    }
  }

  .page-title {
    color: var(--white);
    margin-top: 1.25rem;
    padding: ${({ location }) => handleLocation(location)};
  }

  .hero__intro {
    margin-top: 2em;
  }

  .button {
    margin-top: 1.875rem;
  }

  .logo-only {
    width: 14.5rem;
  }
`;

export default function Hero({ hero, title, context }) {
  const heroData = hero[0];

  return (
    <HeroStyles
      className={`section section__hero${
        heroData?.isBackground ? '' : ' section__hero--boxed'
      }`}
      location={context}
    >
      {heroData?.background && (
        <div className="hero__illustr">
          <Img
            fluid={heroData?.background?.bgimage.asset.fluid}
            alt={title.fr}
          />
        </div>
      )}
      <div className="hero__content">
        <div
          className={`container${
            heroData?.isBackground ? ' container--sm' : ' container--lg'
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
              target={heroData?.cta?.ctaPageLink[0]?.slug.current}
              styles="transparent"
              title={heroData?.cta?.title}
            />
          )}
          {!heroData?.isBackground && (
            <div className="hero__illustr--boxed">
              <Img
                fluid={heroData?.frontimage?.image.asset.fluid}
                alt={title.fr}
              />
            </div>
          )}
        </div>
      </div>
    </HeroStyles>
  );
}
