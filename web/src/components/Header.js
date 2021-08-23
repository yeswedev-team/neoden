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
import { debounce } from '../utils/helpers';

const HeaderStyles = styled.header`
  background-color: var(--brown);
  padding-top: ${pxtoem(12)};
  padding-bottom: ${pxtoem(12)};
  position: fixed;
  transition: transform 200ms linear;
  width: 100%;
  will-change: transform;
  z-index: 5;

  .container {
    align-items: center;
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 4;
  }
  .logo {
    align-items: center;
    background: red;
    color: var(--white);
    display: flex;
    min-height: 3.0625rem;
    padding: 10px;
    text-align: center;
    width: auto;
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
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  let windowWidth = 0;

  if (typeof window !== 'undefined') {
    windowWidth = window.innerWidth;
  }

  const [width, setWidth] = React.useState(windowWidth);
  const breakpoint = 1280;

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);

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

  const handleScroll = debounce(() => {
    if (windowWidth < breakpoint) {
      // find current scroll position
      const currentScrollPos = window.pageYOffset;

      // set state based on location info (explained in more detail below)
      setVisible(
        (prevScrollPos > currentScrollPos &&
          prevScrollPos - currentScrollPos > 73) ||
          currentScrollPos < 100
      );

      // set state to new scroll position
      setPrevScrollPos(currentScrollPos);
    }
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <HeaderStyles
      id="header"
      style={{ transform: visible ? 'translateY(0)' : 'translateY(-100%)' }}
    >
      <div className="container container--xl">
        <Nav navItems={navItems} open={open} setOpen={setOpen} />
        <Link to="/" className="logo">
          NEODEN PREPROD
        </Link>
        <div className="header__actions">
          <a
            href="https://app.flexybeauty.com/neoden/home"
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
