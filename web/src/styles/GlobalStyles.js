import { createGlobalStyle } from 'styled-components';
import { pxtoem, pxtopc, remCalc } from './Mixins';
import { mq } from './breakpoints';

const GlobalStyles = createGlobalStyle`
  :root {
    --grey: #F2F2F2;
    --grey-dark: #2e2e2e;
    --white: #ffffff;
    --brownlighter: #E1E0DC;
    --brownlight: #C2AFA5;
    --brown: #916D5B;
    --beigedark: #A5968F;
    --beigelight: #EBDEDD;
    --beige: #CFC6C2;
    --font: 'Raleway', sans-serif;
    --font-titles: 'Crimson Text', serif;
    --gap: 2.5rem; /* 40px */
    --section-bot-padding: 2.1875rem;
    --section-top-padding: 2.625rem;
    --radius: 5px;

  }

  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
      background: var(--white);
      color: var(--brown);
      font-family: var(--font);
      font-size: 16px;
      line-height: calc(85 / 60);
      -webkit-font-smoothing: antialiased;
      overflow-x: hidden;
  }

  ul,
  ol {
      list-style: none;
      margin: 0;
      padding: 0;
  }

  img {
    border-radius: var(--radius);
    max-width: 100%;
  }

  /* Layout */

  .content {
    overflow: hidden;
    padding-top: 73px;
    position: relative;
    z-index: 4;

    ${mq[3]} {
      padding-top: 0;
    }
  }

  .container {
    margin: 0 auto;
    max-width: ${pxtoem(275)};
    width: 90%;

    &--xs {
      max-width: ${pxtoem(485)};
    }
    &--sm {
      max-width: ${pxtoem(695)};
    }
    &--md {
      max-width: ${pxtoem(905)};
    }
    &--lg {
      max-width: ${pxtoem(1115)};
    }
    &--xl {
      max-width: ${pxtoem(1278)};
    }
  }
  ${mq[1]} {
    .container--sm-after-sm {
      max-width: ${pxtoem(695)} !important;
    }
  }
  ${mq[2]} {
    .container--sm-after-md {
      max-width: ${pxtoem(695)} !important;
    }
    .container--xl-after-md {
      max-width: ${pxtoem(1278)} !important;
    }
  }

  /* Sections */
  .section {
    position: relative;

    &.has-wave-up {
      padding-top: 0;
    }
    &.has-wave-bt,
    &.has-wave-down {
      + .section {
        padding-top: calc(var(--section-top-padding) * 2);
      }
      + .section.section__members {
        padding-top: calc(var(--section-top-padding) * 2.5);
      }
    }

    &__intro {
      background: var(--white);

      &.has-wave-bt,
      &.has-wave-down {
        z-index: 3;
      }
    }

    &__columns {
      .container {
        display: flex;
        flex-wrap: wrap;
        gap: var(--gap);
      }
      .col {
        width: 100%;
      }

      &--two {
        ${mq[2]} {          
          .container {
            flex-wrap: nowrap;
          }
          .col {
            width: 50%;
          }
        }
      }
      &--two--withimg {
        ${mq[2]} {          
          .col:first-child {
            width: ${pxtopc(485, 1115)};
          }
          .col:last-child {
            width: ${pxtopc(630, 1115)};
          }
          &.img-at-right {
            .col:first-child {
              order: 2;
            }
            .col:last-child {
              order: 1;
            }
          }
        }
      }
    }

    &__hero {
      padding: 0;
      z-index: 2;

      .hero__content {
        background-color: rgba(145, 109, 91, 0.59);
        padding: 2.5rem 0;

        .container {
          text-align: center;
        }

        ${mq[1]} {
          background-color: transparent;
          left: 50%;
          padding: 0;
          position: absolute;
          text-align: center;
          top: 50%;
          transform: translate(-50%, -50%);          
        }
      }
      &--boxed {
        background-color: rgba(145, 109, 91, 0.59);
        color: var(--white);
        padding-top: 7.625rem;

        .hero__content {
          left: auto;
          position: relative;
          top: auto;
          transform: none;

          > .container {
            padding-bottom: 220px;
          }
        }        
      }
    }
  }

  /* Custom styles */
  .button {
    align-items: center;
    background: var(--white);
    border: none;
    border-radius: ${pxtoem(18)};
    color: var(--brown);
    display: inline-flex;
    font-size: ${remCalc(13)};
    font-weight: 500;
    padding: ${remCalc(8)} ${remCalc(30)};
    text-align: center;
    transition: background 200ms linear;
    white-space: nowrap;

    ${mq[1]} {
      font-size: 1rem;
    }

    &:hover {
        background-color: var(--brownlighter);
    }

    &--brown {
      background: var(--brown);
      color: var(--white);

      &:hover {
        background-color: var(--brownlight);
      }
    }

    &--brownlight {
      background: var(--brownlighter);
    }

    &--transparent {
      background: rgba(242, 242, 242, 0.8);
    }
  }
  .close {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.3125rem;
    position: absolute;
    right: 30px;
    top: 13px;

    strong {
      font-weight: 500;
    }
  }

  .invisible {
    display: none;
  }
  .visible {
    display: block;
  }

  /* sticky component */
  .sticky-outer-wrapper {
    left: calc(((100% - 56.5rem) / 2) - 10.1875rem);
    opacity: 0;
    pointer-events: none;
    position: relative;
    transition: opacity 600ms linear;
    z-index: 4;

    &.active {
      opacity: 1;
      pointer-events: auto;
    }
  }

  /* alert */
  .warning {
    &--left {
      left: -1.25rem;
      padding-left: 3.125rem;
      padding-right: 2.3125rem;
    }
    &--center {
      left: 50%;
      padding-left: 2.3125rem;
      padding-right: 2.3125rem;
      transform: translateX(-50%);
    }
    &--right {
      right: -1.25rem;
      padding-left: 2.3125rem;
      padding-right: 3.125rem;
    }
  }

  .grow { 
    overflow: hidden;

    img {
      transition: transform .4s linear !important;
      transform: scale(1.1);
      will-change: transform;
    }

    &:focus,
    &:hover {
      img {
        transform: scale(1); 
        transition: transform 2s linear !important;
      }
    }
  }
  .grow-fast {
    &:focus,
    &:hover {
      img {
        transform: scale(1); 
        transition: transform .4s linear !important;
      }
    }
  }

  .sr-only { 
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    overflow: hidden;
    padding: 0;
    border: 0;
    white-space: nowrap;
  }

  .sr-only.focusable:active,
  .sr-only.focusable:focus {
    clip: auto;
    height: auto;
    margin: 0;
    overflow: visible;
    position: static;
    width: auto;
  }



  canvas[resize] {
    width: 100%;
  }

  /* Base for label styling */
  [type="checkbox"]:not(:checked),
  [type="checkbox"]:checked {
    position: absolute;
    left: 0;
    opacity: 0.01;
  }
  [type="checkbox"]:not(:checked) + label,
  [type="checkbox"]:checked + label {
    position: relative;
    padding-left: 2.3em;
    /* font-size: 1.05em; */
    line-height: 1.7;
    cursor: pointer;
  }

  /* checkbox aspect */
  [type="checkbox"]:not(:checked) + label:before,
  [type="checkbox"]:checked + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 23px;
    height: 23px;
    border: 1px solid #aaa;
    background: #FFF;
    border-radius: .2em;
    box-shadow: inset 0 1px 3px rgba(0,0,0, .1), 0 0 0 rgba(145, 109, 91, 0.2);
    transition: all .275s;
  }

  /* checked mark aspect */
  [type="checkbox"]:not(:checked) + label:after,
  [type="checkbox"]:checked + label:after {
    content: '✓';
    position: absolute;
    top: 0.75rem;
    left: 0.3125rem;
    font-size: 1.375em;
    color: var(--brown);
    line-height: 0;
    transition: all .2s;
  }

  /* checked mark aspect changes */
  [type="checkbox"]:not(:checked) + label:after {
    opacity: 0;
    transform: scale(0) rotate(45deg);
  }

  [type="checkbox"]:checked + label:after {
    opacity: 1;
    transform: scale(1) rotate(0);
  }

  /* Accessibility */
  [type="checkbox"]:checked:focus + label:before,
  [type="checkbox"]:not(:checked):focus + label:before {
    box-shadow: inset 0 1px 3px rgba(0,0,0, .1), 0 0 0 6px rgba(145, 109, 91, 0.2);
  }

  /* Modal */
  .modal-wrapper {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 999;
  }

  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(145, 109, 91, 0.1);
    z-index: 100;
  }

  .modal-content {
    background-color: rgba(145, 109, 91, 0.95);
    border-radius: var(--radius);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    color: var(--white);
    left: 50%;
    max-width: 69.6875rem;
    min-height: 40%;
    max-height: 90vh;
    padding: 76px 105px 52px;
    position: relative;
    text-align: center;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    z-index: 101;

    .close {
      color: var(--white);
    }

    .middle-title {
      margin: 0 auto;
      max-width: 37.5rem;
      text-align: center;
    }
    .places-list {
      align-items: flex-end;
      display: flex;
      column-gap: 2.5rem;
      flex-wrap: wrap;
      margin-bottom: 3.125rem;
      margin-top: 2.875rem;
      justify-content: space-between;
    }
    .button {
      margin: 0 auto;
    }
    .place {
      background: var(--white);
      border-radius: var(--radius);
      color: var(--brown);
      flex-shrink: 0;
      flex-grow: 1;
      width: 30%;

      input[type="radio"] {
        opacity: 0;
        position: absolute;
        visibility: hidden;
      }

      label {
        cursor: pointer;
        display: block;
        padding: 35px 35px 45px;
        position: relative;
        text-align: left;

        &:before,
        &:after {
          left: 50%;
          position: absolute;
          transform: translateX(-50%);
        }

        &:before {
          border: 1px solid var(--brown);
          border-radius: 100%;
          bottom: 1.5625rem;
          content: "";
          display: block;          
          height: 19px;
          width: 19px;
        }
        &:after {
          background-color: var(--brown);
          content: "";
          bottom: 28px;
          border-radius: 100%;
          display: block;
          height: 13px;
          left: 50%;
          position: absolute;
          width: 13px;
        }
      }
      input[type="radio"] + label:after {
        content: none;
      }
      input[type="radio"]:checked + label:after {
          content: "";
      }

      &__name {
        font-size: 1.25rem;
        font-weight: 500;
        text-transform: uppercase;
      }
    }
  }

  .overprintLogo {
      max-height: 850px;
      position: absolute;
      z-index: 5;    

      &--right {
        height: 50vw;
        mix-blend-mode: multiply;
        left: calc((100% - 1115px) / 2 + 1215px);
        top: 52vh;
        transform: scaleX(-1);
      }

      &--left {
        height: 40vw;
        mix-blend-mode: darken;
        right: calc((100% - 1115px) / 2 + 1215px);
        transform: scaleX(-1) translateY(-50%);
      }
  }
`;

export default GlobalStyles;
