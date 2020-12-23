import { createGlobalStyle } from 'styled-components';
import { pxtoem, remCalc, pxtovw } from './Mixins';

const GlobalStyles = createGlobalStyle`
  :root {
    --grey: #353537;
    --grey-dark: #2e2e2e;
    --gold-light: #dfcca2;
    --white: #ffffff;
    --beige: #f6efe5;
    --gold: #c3a050;
    --green: #688376;
    --blue: #6c8a9d;
    --font: 'Source Sans Pro', sans-serif;
    --font-titles: 'Cassannet Plus', serif;
    --font-index: 'Made Cannes', serif;
    --width-ratio: ${pxtovw(1841, 1920)};
  }

  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
      background: var(--grey);
      color: var(--white);
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

  /* Custom styles */
  .button {
    align-items: center;
    background: var(--gold);
    border: none;
    color: var(--white);
    display: inline-flex;
    font-size: ${remCalc(30)};
    max-height: ${remCalc(73)};
    padding: ${remCalc(24)} ${remCalc(216)};
    text-transform: uppercase;
  }
`;

export default GlobalStyles;
