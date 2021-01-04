import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Logo from '../assets/images/logo-neoden-seul.inline.svg';
import Button from './Button';

const HeroStyles = styled.section`
  max-height: 95vh;
  overflow: hidden;
  padding: 0;

  .hero__content {
    left: 50%;
    position: absolute;
    text-align: center;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .page-title {
    color: var(--white);
    margin-top: 1.25rem;
    padding-left: ${(props) => (props.location === 'home' ? '2.5rem' : '0')};
    padding-right: ${(props) => (props.location === 'home' ? '2.5rem' : '0')};
  }

  .button {
    margin-top: 1.875rem;
  }

  .logo-only {
    width: 14.5rem;
  }
`;

export default function Hero({ hero, title, context }) {
  return (
    <HeroStyles className="section section__hero" location={context}>
      {hero[0]?.illustration && (
        <div className="hero__illustr">
          <Img fluid={hero[0].illustration?.image.asset.fluid} alt={title.fr} />
        </div>
      )}
      <div className="hero__content">
        <div className="container container--sm">
          {hero[0]?.hasLogo && <Logo className="logo-only" />}
          {title && <h1 className="page-title">{title.fr}</h1>}
          {hero[0]?.cta?.ctaPageLink && (
            <Button
              target={hero[0]?.cta?.ctaPageLink[0]?.slug.current}
              styles="transparent"
              title={hero[0]?.cta?.title}
            />
          )}
        </div>
      </div>
    </HeroStyles>
  );
}
