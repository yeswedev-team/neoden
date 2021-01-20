import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { Link } from '@reach/router';
import { mq } from '../styles/breakpoints';
import { addToRefs } from '../utils/helpers';

const BurgerStyles = styled.button`
  -webkit-appearance: none !important;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  overflow: hidden;
  padding: 0;
  pointer-events: auto;
  position: absolute;
  right: 1.4375rem;
  top: 1.5625rem;
  transition: color 0.15s linear;
  z-index: 5;

  a {
    display: block;
    height: 29px;
    width: 2.125rem;
  }

  .burger {
    display: block;
    width: auto;
    height: 100%;
  }
  .burger--wave {
    /* stroke: currentColor;
      fill: transparent;
      stroke-width: 4px; */
  }

  span {
    display: block;
    height: 29px;
    overflow: hidden;
    width: 2.125rem;
  }

  .menu-toggle--hamburger {
    transition: opacity 0.15s 0.25s linear;
  }

  .nav-open .menu-toggle--hamburger {
    -webkit-transition-delay: 0s;
    transition-delay: 0s;
    opacity: 0;
  }
  .menu-toggle--close {
    position: absolute;
    top: 1rem;
    opacity: 0;
    pointer-events: none;
    transform: scale(0.65);
    color: #efefef;
    transition: opacity 0.15s linear, transform 0.25s ease-out;
  }
  .nav-open .menu-toggle--close {
    opacity: 1;
    pointer-events: auto;
    transform: none;
    transition-delay: 0.15s;
  }

  ${mq[3]} {
    display: none;
  }
`;

export default function Burger({ open, setOpen }) {
  const burgerRef = useRef();
  const waveRefs = useRef([]);

  const tl = gsap.timeline({ paused: true });

  useEffect(() => {
    tl.to(waveRefs.current, {
      xPercent: -50,
      duration: 0.5,
      repeat: -1,
      ease: 'none',
    });
    return () => tl && tl.kill();
  }, [tl]);

  const onMouseEnterHandler = () => {
    tl.play();
  };
  const onMouseLeaveHandler = () => {
    tl.pause().seek(0);
  };

  return (
    <BurgerStyles type="button">
      <Link
        to="#"
        ref={burgerRef}
        open={open}
        onClick={(e) => {
          e.preventDefault();
          setOpen(!open);
        }}
      >
        <span
          className="menu-toggle--hamburger"
          ref={burgerRef}
          onMouseEnter={onMouseEnterHandler}
          onMouseLeave={onMouseLeaveHandler}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70.8"
            height="29"
            viewBox="0 0 70.8 29"
            xmlSpace="preserve"
          >
            <path
              ref={(el) => addToRefs(waveRefs, el)}
              className="burger--wave"
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="3"
              d="M1.5,1.5c5.6,0,5.6,6,11.3,6s5.6-6,11.3-6s5.6,6,11.3,6s5.6-6,11.3-6s5.7,6,11.3,6s5.6-6,11.3-6"
            />
            <path
              ref={(el) => addToRefs(waveRefs, el)}
              className="burger--wave"
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="3"
              d="M1.5,11.5c5.6,0,5.6,6,11.3,6s5.6-6,11.3-6s5.6,6,11.3,6s5.6-6,11.3-6s5.7,6,11.3,6s5.6-6,11.3-6"
            />
            <path
              ref={(el) => addToRefs(waveRefs, el)}
              className="burger--wave"
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="3"
              d="M1.5,21.5c5.6,0,5.6,6,11.3,6s5.6-6,11.3-6s5.6,6,11.3,6s5.6-6,11.3-6s5.7,6,11.3,6s5.6-6,11.3-6"
            />
          </svg>
        </span>
      </Link>
      <span className="menu-toggle--close">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
          <title>Fermer le menu</title>
          <polygon points="48.53 3.591 46.409 1.47 25 22.879 3.591 1.47 1.47 3.591 22.879 25 1.471 46.409 3.592 48.53 25 27.121 46.408 48.529 48.529 46.408 27.121 25 48.53 3.591" />
        </svg>
      </span>
    </BurgerStyles>
  );
}
