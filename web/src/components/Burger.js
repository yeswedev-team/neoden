import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { Link } from 'gatsby';
import MorphSVGPlugin from 'gsap/MorphSVGPlugin';
import { mq } from '../styles/breakpoints';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(MorphSVGPlugin);
}

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
    height: 1.9375rem;
    width: 2.3125rem;
  }
  #flatty-top,
  #flatty-mid,
  #flatty-bot,
  #wavy-top,
  #wavy-mid,
  #wavy-bot {
    stroke: #fff;
  }

  #flatty-top,
  #flatty-mid,
  #flatty-bot {
    visibility: hidden;
  }

  ${mq[3]} {
    display: none;
  }
`;

export default function Burger({ open, setOpen }) {
  const burgerRef = useRef();
  const waveTopRef = useRef();
  const waveMidRef = useRef();
  const waveBotRef = useRef();
  const flatTopRef = useRef();
  const flatMidRef = useRef();
  const flatBotRef = useRef();

  const tlHover = gsap.timeline({
    paused: true,
    reversed: true,
    defaults: {
      duration: 0.5,
      ease: 'Back.inOut.config(2.3)',
    },
  });

  useEffect(() => {
    gsap.set(flatMidRef.current, { autoAlpha: 0 });

    tlHover
      .to(waveTopRef.current, { morphSVG: flatTopRef.current }, '<')
      .to(waveMidRef.current, { morphSVG: flatMidRef.current }, '<')
      .to(waveBotRef.current, { morphSVG: flatBotRef.current }, '<');
  }, [
    tlHover,
    waveTopRef,
    waveMidRef,
    waveBotRef,
    flatTopRef,
    flatMidRef,
    flatBotRef,
  ]);

  const tlToggle = gsap.timeline({
    paused: true,
    reversed: true,
    defaults: {
      duration: 0.5,
      ease: 'power2',
    },
    onReverseComplete: () => tlHover.reverse(),
  });

  useEffect(() => {
    tlToggle
      .to(waveMidRef.current, {
        duration: 0.3,
        scaleX: 0,
        transformOrigin: 'right center',
        ease: 'none',
      })
      .to(waveTopRef.current, { y: 10 }, '-=0.1')
      .to(waveBotRef.current, { y: -10 }, '<')
      .to(waveTopRef.current, {
        rotation: 45,
        transformOrigin: 'center center',
      })
      .to(
        waveBotRef.current,
        { rotation: -45, transformOrigin: 'center center' },
        '<'
      );
  }, [tlToggle, waveTopRef, waveMidRef, waveBotRef]);

  const onMouseEnterHandler = () => {
    if (!tlToggle.isActive()) {
      tlHover.play();
    }
  };

  const onMouseLeaveHandler = () => {
    if (!tlToggle.isActive() && tlToggle.progress() === 0) {
      tlHover.reverse();
    }
  };
  const handleClick = (e) => {
    e.preventDefault();
    setOpen(!open);
    const isReversed = tlToggle.reversed();
    console.log(isReversed);
    if (isReversed) {
      tlToggle.play();
    } else {
      tlToggle.reverse();
    }
  };

  return (
    <BurgerStyles type="button">
      <Link
        to="#"
        ref={burgerRef}
        open={open}
        onClick={handleClick}
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 31">
          <path
            id="flatty-top"
            ref={flatTopRef}
            fill="none"
            strokeWidth="3"
            strokeLinecap="round"
            strokeMiterlimit="10"
            d="M1.6,3.5c5.6,0,5.6,0,11.3,0s5.6,0,11.3,0s5.6,0,11.3,0"
          />
          <path
            id="flatty-mid"
            ref={flatMidRef}
            fill="none"
            strokeWidth="3"
            strokeLinecap="round"
            strokeMiterlimit="10"
            d="M1.6,13.5c5.6,0,5.6,0,11.3,0s5.6,0,11.3,0s5.6,0,11.3,0"
          />
          <path
            id="flatty-bot"
            ref={flatBotRef}
            fill="none"
            strokeWidth="3"
            strokeLinecap="round"
            strokeMiterlimit="10"
            d="M1.6,23.5c5.6,0,5.6,0,11.3,0s5.6,0,11.3,0s5.6,0,11.3,0"
          />
          <path
            id="wavy-top"
            ref={waveTopRef}
            fill="none"
            strokeWidth="3"
            strokeLinecap="round"
            strokeMiterlimit="10"
            d="M1.5,3.5c5.6,0,5.6,6,11.3,6s5.6-6,11.3-6s5.6,6,11.3,6"
          />
          <path
            id="wavy-mid"
            ref={waveMidRef}
            fill="none"
            strokeWidth="3"
            strokeLinecap="round"
            strokeMiterlimit="10"
            d="M1.5,13.5c5.6,0,5.6,6,11.3,6s5.6-6,11.3-6s5.6,6,11.3,6"
          />
          <path
            id="wavy-bot"
            ref={waveBotRef}
            fill="none"
            strokeWidth="3"
            strokeLinecap="round"
            strokeMiterlimit="10"
            d="M1.5,23.5c5.6,0,5.6,6,11.3,6s5.6-6,11.3-6s5.6,6,11.3,6"
          />
        </svg>
      </Link>
    </BurgerStyles>
  );
}
