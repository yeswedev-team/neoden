import { createGlobalStyle } from 'styled-components';
import { remCalc, calcClamp } from './Mixins';

const Typography = createGlobalStyle`

  h1,h2,h3,h4,h5,h6 {
    font-family: var(--font-titles);
    line-height: calc(50 / 55);
    margin: 0;
  }

  a {
    color: var(--brown);
    text-decoration: none;
  }

  .center {
    text-align: center;
  }

  /* Custom */
  .page-title {
    font-size: 4.4375rem;
    font-weight: normal;
    text-align: center;
  }
  .overtitle {
    font-family: var(--font);
    font-size: 1.25rem;
    font-weight: 300;
  }
  .section-title {
    font-size: 3.4375rem;
    font-weight: normal;
    line-height: calc(50 / 55);
  }
  .text-content {
    font-size: 1rem;
    font-weight: 500;
    line-height: calc(23 / 16);
  }
`;

export default Typography;
