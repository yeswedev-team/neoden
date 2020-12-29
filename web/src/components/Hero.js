import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Logo from '../assets/images/logo-neoden-seul.inline.svg';
import Button from './Button';

const HeroStyles = styled.section`
  max-height: 95vh;

  .hero__content {
    left: 50%;
    position: absolute;
    text-align: center;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default function Hero({ hero, title }) {
  const { illustration, hasLogo, cta } = hero[0];
  console.log(cta);
  return (
    <HeroStyles className="section section__hero">
      <div className="hero__illustr">
        <Img fluid={illustration.image.asset.fluid} alt={title.fr} />
      </div>
      <div className="hero__content">
        <div className="container container--sm">
          {hasLogo && <Logo className="logo-only" />}
          {title && <h1 className="page-title">{title.fr}</h1>}
          {cta.ctaPageLink && (
            <Button
              target={cta.ctaPageLink[0].slug.current}
              styles="transparent"
              title={cta.title}
            />
          )}
        </div>
      </div>
    </HeroStyles>
  );
}
