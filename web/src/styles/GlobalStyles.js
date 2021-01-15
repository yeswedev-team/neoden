import { createGlobalStyle } from 'styled-components';
import { pxtoem, pxtopc, remCalc } from './Mixins';

const GlobalStyles = createGlobalStyle`
  :root {
    --grey: #F2F2F2;
    --grey-dark: #2e2e2e;
    --white: #ffffff;
    --brownlighter: #E1E0DC;
    --brownlight: #C2AFA5;
    --brown: #916D5B;
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
  }

  .container {
    margin: 0 auto;
    max-width: ${pxtoem(275)};

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
        gap: var(--gap);
      }

      &--two {
        .col {
          width: 50%;
        }
      }
      &--two--withimg {
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

    &__hero {
      padding: 0;
      z-index: 2;

      .hero__content {
        left: 50%;
        position: absolute;
        text-align: center;
        top: 50%;
        transform: translate(-50%, -50%);
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
    font-size: ${remCalc(16)};
    font-weight: 500;
    padding: ${remCalc(8)} ${remCalc(30)};
    text-align: center;
    transition: background 200ms linear;
    white-space: nowrap;

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
`;

export default GlobalStyles;
