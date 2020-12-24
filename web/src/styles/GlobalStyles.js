import { createGlobalStyle } from 'styled-components';
import { pxtoem, remCalc, pxtovw } from './Mixins';

const GlobalStyles = createGlobalStyle`
  :root {
    --grey: #F2F2F2;
    --grey-dark: #2e2e2e;
    --white: #ffffff;
    --brown: #916D5B;
    --font: 'Raleway', sans-serif;
    --font-titles: 'Crimson Text', serif;
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
      overflow: hidden;
  }

  html,
  body,
  .tl-edges,
  .tl-wrapper,
  #___gatsby,
  #gatsby-focus-wrapper {
    height: 100%;
  }

  html,
  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    display: flex;
    flex-direction: column;
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

  /* Custom styles */
  .button {
    align-items: center;
    background: var(--white);
    border: none;
    border-radius: ${pxtoem(18)};
    color: var(--brown);
    display: flex;
    font-size: ${remCalc(16)};
    padding: ${remCalc(8)} ${remCalc(30)};
    white-space: nowrap;
  }
`;

export default GlobalStyles;
