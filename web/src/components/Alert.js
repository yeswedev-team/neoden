import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { getBlogUrl } from '../utils/helpers';

import PortableText from './PortableText';

const AlertStyles = styled.div`
  background-color: var(--beigelight);
  border-radius: var(--radius);
  bottom: 15vh;
  padding-bottom: 2.6875rem;
  padding-top: 2.6875rem;
  position: fixed;
  text-align: center;
  width: 20.625rem;
  z-index: 5;

  h3 {
    font-size: 1.5rem;
    text-transform: uppercase;
  }
  .block {
    font-size: 0.875rem;
    font-weight: 500;
    margin: 1.25rem 0;
  }
  .close {
    color: var(--brown);
  }
`;

export default function Alert({ alert }) {
  const { alertTitle, _rawAlertText, alertLink, alertPosition } = alert;

  const [isOpen, setIsOpen] = useState(true);

  const handleWarningPosition = (position) => {
    switch (position) {
      case 'left':
        return 'warning warning--left';
      case 'center':
        return 'warning warning--center';
      default:
        return 'warning warning--right';
    }
  };
  return (
    <div className={`${isOpen === true ? 'visible' : 'invisible'}`}>
      <AlertStyles className={handleWarningPosition(alertPosition[0])}>
        <button
          type="button"
          className="close"
          onClick={() => setIsOpen(false)}
        >
          <strong>X</strong>
          <span className="sr-only">Fermer</span>
        </button>
        {alertTitle && <h3>{alertTitle}</h3>}
        {_rawAlertText && <PortableText blocks={_rawAlertText} />}
        {alertLink && (
          <Link
            to={getBlogUrl(alertLink[0].publishedAt, alertLink[0].slug.current)}
            className="button button--brown"
          >
            En savoir plus
          </Link>
        )}
      </AlertStyles>
    </div>
  );
}
