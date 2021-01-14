import { Link } from 'gatsby';
import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Logo from '../assets/images/logo-neoden.inline.svg';
import { pxtoem } from '../styles/Mixins';
import Nav from './Nav';
import WavesMenu from '../assets/images/wavesMenu.inline.svg';

gsap.registerPlugin(ScrollTrigger);

const HeaderStyles = styled.header`
  background-position: bottom center;
  background-size: cover;
  padding-top: ${pxtoem(25)};
  padding-bottom: ${pxtoem(25)};
  position: fixed;
  width: 100%;
  z-index: 4;

  .container {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
  .logo {
    display: block;
    left: 50%;
    position: absolute;
    top: ${pxtoem(15)};
    transform: translateX(-50%);
    width: ${pxtoem(160)};
    z-index: 2;
  }

  svg {
    bottom: -0.625rem;
    fill: transparent;
    position: absolute;
    z-index: -1;
  }
`;

const Header = ({ navItems }) => {
  const headerRef = useRef(null);
  const colorChange = gsap.timeline({
    paused: true,
    scrollTrigger: {
      trigger: 'body',
      start: 'top+=50px top',
      end: 'top+=600px top',
      scrub: 0.5,
      toggleActions: 'play none none none',
    },
  });

  useEffect(() => {
    const svg = headerRef.current.querySelector('svg');
    colorChange.to(svg, { fill: '#A5968F' });

    return colorChange.kill();
  }, [colorChange]);

  return (
    <HeaderStyles>
      <div className="container container--xl">
        <Nav navItems={navItems} />
        <Link to="/">
          <Logo className="logo" />
        </Link>
        <div className="header__actions">
          <a
            href="https://www.nouvellevague.fr"
            className="button"
            target="_blank"
            rel="noreferrer"
          >
            Réserver ou offrir
          </a>
        </div>
      </div>
      <div className="svg-container" ref={headerRef}>
        <WavesMenu />
      </div>
    </HeaderStyles>
  );
};

export default Header;
