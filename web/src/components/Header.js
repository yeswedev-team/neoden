import { Link } from 'gatsby';
import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Logo from '../assets/images/logo-neoden.inline.svg';
import { pxtoem } from '../styles/Mixins';
import Nav from './Nav';
import WavesMenu from '../assets/images/wavesMenu.inline.svg';
import { mq } from '../styles/breakpoints';
import Burger from './Burger';

const HeaderStyles = styled.header`
  background-color: var(--brown);
  padding-top: ${pxtoem(12)};
  padding-bottom: ${pxtoem(12)};
  position: fixed;
  width: 100%;
  z-index: 5;

  .container {
    align-items: center;
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 4;
  }
  .logo {
    display: block;
    width: ${pxtoem(147)};
    z-index: 2;
  }

  .svg-container {
    display: none;

    ${mq[3]} {
      display: block;
    }
  }

  .bgwave {
    bottom: -0.625rem;
    fill: transparent;
    position: absolute;
    z-index: -1;
  }

  .header__actions {
    display: none;
  }

  ${mq[3]} {
    background-color: transparent;
    background-position: bottom center;
    background-size: cover;
    padding-top: ${pxtoem(25)};
    padding-bottom: ${pxtoem(25)};

    .container {
      justify-content: space-between;
      position: static;
    }

    .header__actions {
      display: block;
    }
    .logo {
      left: 50%;
      position: absolute;
      top: ${pxtoem(15)};
      transform: translateX(-50%);
      width: ${pxtoem(160)};
    }
  }
`;

const Header = ({ navItems }) => {
  const headerRef = useRef(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.matchMedia({
      // desktop
      '(min-width: 1280px)': function () {
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
        const svg = headerRef.current.querySelector('svg');
        colorChange.to(svg, { fill: '#A5968F' });
        return colorChange.kill();
      },
    });
  }, []);

  return (
    <HeaderStyles id="header">
      <div className="container container--xl">
        <Nav navItems={navItems} open={open} setOpen={setOpen} />
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
      <Burger open={open} setOpen={setOpen} />
      <div className="svg-container" ref={headerRef}>
        <WavesMenu className="bgwave" />
      </div>
    </HeaderStyles>
  );
};

export default Header;
