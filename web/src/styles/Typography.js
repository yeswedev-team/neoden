import { createGlobalStyle } from 'styled-components';
import { remCalc, calcClamp } from './Mixins';

const Typography = createGlobalStyle`

  h1,h2,h3,h4,h5,h6 {
    font-family: var(--font-titles);
    line-height: calc(66 / 55);
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
  .page__title {
    border-bottom: 2px solid var(--gold);
    font-size: ${calcClamp(2.1, 3.75)};
    font-weight: 500;
    line-height: 1;
    opacity: 1;
    padding: ${remCalc(22)} ${remCalc(40)} ${remCalc(16)};
    text-align: center;
    transition: opacity 200ms linear;
    width: 100%;

    .wf-loading & {
      font-family: Arial;
      font-size: ${remCalc(55)};
      opacity: 0;
    }

    &--gold {
      background: var(--gold);
    }
  }
`;

export default Typography;
