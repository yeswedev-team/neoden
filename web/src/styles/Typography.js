import { createGlobalStyle } from 'styled-components';
import { calcClamp } from './Mixins';

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
    font-size: ${calcClamp(3.4375, 4.4375)};
    font-weight: normal;
    line-height: calc(50 / 55);
    text-align: center;
  }
  .blogpost-title {
    font-size: ${calcClamp(3.147, 4.0625)};
    font-weight: normal;
    line-height: calc(60 / 65);
    text-align: center;
  }
  .overtitle {
    font-family: var(--font);
    font-size: 1.25rem;
    font-weight: 300;
  }
  .section-title {
    font-size: ${calcClamp(2.6628, 3.4375)};
    font-weight: normal;
    line-height: calc(50 / 55);
  }
  .middle-title {
    font-size: 2.1875rem;
    font-weight: normal;
    line-height: 1;
  }
  .small-title {
    font-size: 1.5rem;
    font-weight: normal;
  }
  .text-content {
    font-size: 1rem;
    font-weight: 500;
    line-height: calc(23 / 16);
  }
`;

export default Typography;
