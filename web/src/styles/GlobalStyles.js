import { createGlobalStyle } from 'styled-components';
import { pxtoem, remCalc, pxtovw } from './Mixins';

const GlobalStyles = createGlobalStyle`
  :root {
    --grey: #F2F2F2;
    --grey-dark: #2e2e2e;
    --white: #ffffff;
    --brownlighter: #E1E0DC;
    --brownlight: #C2AFA5;
    --brown: #916D5B;
    --font: 'Raleway', sans-serif;
    --font-titles: 'Crimson Text', serif;
    --gap: 2.5rem; /* 40px */
    --section-bot-padding: 4.375rem;
    --section-top-padding: 5.3125rem;
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
  }

  ul,
  ol {
      list-style: none;
      margin: 0;
      padding: 0;
  }

  img {
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
    }

    &__hero {
      padding: 0;

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
        padding-bottom: 17.5rem;
        padding-top: 7.625rem;

        .hero__content {
          left: auto;
          position: relative;
          top: auto;
          transform: none;
        }        
      }
    }

    &.has-wave-bt {
      /* overflow-x: hidden; */
      padding-bottom: 0;

      + .section {
        padding-top: calc(var(--section-top-padding) * 1.5);
      }
    }
    &.has-wave-up {
      padding-top: 1.25rem;
    }
  }

  .wave-up,
  .wave-up-bis,
  .wave-reverse-up,
  .wave-reverse-up-bis,
  .wave-down,
  .wave-down-bis {
    bottom: 0;
    left: 0;
    position: absolute;
    width: 100%;
    will-change: transform;
  }
  .wave-up,
  .wave-up-bis,
  .wave-reverse-up,
  .wave-reverse-up-bis {
    bottom: auto;
    top: 0;
  }

  
  .wave-down {
    animation: waves 20s linear infinite;
  }
  .wave-down-bis {
    animation: wavesbis 20s linear infinite;
  }
  .wave-up {
    animation: wavesUp 20s linear infinite;
  }
  .wave-up-bis {
    animation: wavesUpBis 20s linear infinite;
  }
  .wave-reverse-up {
    animation: wavesReverseUp 20s linear infinite;
  }
  .wave-reverse-up-bis {
    animation: wavesReverseUpBis 20s linear infinite;
  }

  @keyframes waves {
    0% {
      transform: translate(0, 100%);
    }
    50% {
      transform: translate(100%, 100%);
    }
    100% {
      /* from width of the svg file */
      transform: translate(0, 100%);
    }
  }

  @keyframes wavesbis {
    0% {
      transform: translate(-100%, 100%) scaleX(-1);
    }
    50% {
      transform: translate(0, 100%) scaleX(-1);
    }
    100% {
      transform: translate(-100%, 100%) scaleX(-1);
    }
  }

  @keyframes wavesReverseUp {
    0% {
      transform: translate(0, -100%) scale(1, -1);
    }
    50% {
      transform: translate(100%, -100%) scale(1, -1);
    }
    100% {
      /* from width of the svg file */
      transform: translate(0, -100%) scale(1, -1);
    }
  }

  @keyframes wavesReverseUpBis {
    0% {
      transform: translate(-100%, -100%) scale(-1, -1);
    }
    50% {
      transform: translate(0, -100%) scale(-1, -1);
    }
    100% {
      transform: translate(-100%, -100%) scale(-1, -1);
    }
  }

  @keyframes wavesUp {
    0% {
      transform: translate(0, -100%);
    }
    50% {
      transform: translate(1366px, -100%);
    }
    100% {
      transform: translate(0, -100%);
    }
  }

  @keyframes wavesUpBis {
    0% {
      transform: translate(-1366px, -100%);
    }
    50% {
      transform: translate(0, -100%);
    }
    100% {
      transform: translate(-1366px, -100%);
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
    padding: ${remCalc(8)} ${remCalc(30)};
    text-align: center;
    white-space: nowrap;

    &--brown {
      background: var(--brown);
      color: var(--white);
    }

    &--transparent {
      background: rgba(242, 242, 242, 0.6);
    }
  }
`;

export default GlobalStyles;
