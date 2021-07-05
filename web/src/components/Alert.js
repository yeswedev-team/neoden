import React, { useState } from 'react';
import styled from 'styled-components';
// import { useCookies } from 'react-cookie';
import { mq } from '../styles/breakpoints';
import Close from '../assets/images/close.inline.svg';
import AlertSimple from './AlertSimple';
import AlertForm from './AlertForm';
import AlertPromo from './AlertPromo';
import Portal from './Portal';

const AlertStyles = styled.div`
  background-color: var(--beigelight);
  border-radius: var(--radius);
  bottom: 0;
  position: fixed;
  text-align: center;
  width: 100%;
  z-index: 5;

  &.alert--form {
    width: 90%;
  }

  iframe {
    border-radius: var(--radius);
  }

  &.alert--promo {
    padding-top: 0;

    img {
      border-radius: var(--radius) var(--radius) 0 0;
    }
  }
  &.alert--form {
    padding-bottom: 0;
    padding-top: 0;
  }

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
    align-items: center;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 100%;
    display: flex;
    justify-content: center;
    height: 1.875rem;
    padding: 0;
    width: 1.875rem;
    z-index: 2;

    svg {
      display: block;
      height: 0.75rem;
      width: 0.75rem;
    }
  }

  ${mq[1]} {
    bottom: 1.25rem;
    width: 40rem;

    &.alert--form {
      width: auto;
    }
  }
`;

export default function Alert({ alert }) {
  const { alertDestiny, alertPosition } = alert;
  let type;
  if (alertDestiny[0] && alertDestiny[0]._type === 'alert') {
    type = 'alert';
  } else if (alertDestiny[0] && alertDestiny[0]._type === 'form') {
    type = 'form';
  } else if (alertDestiny[0] && alertDestiny[0]._type === 'promo') {
    type = 'promo';
  }

  const [isOpen, setIsOpen] = useState(true);
  // const [cookies, setCookie] = useCookies(['read', 'false']);

  const handleWarningPosition = (position, alertType) => {
    const classesArr = [];

    if (position === 'left') {
      classesArr.push('warning', 'warning--left');
    } else if (position === 'center') {
      classesArr.push('warning', 'warning--center');
    } else if (position === 'right') {
      classesArr.push('warning', 'warning--right');
    }

    if (alertType === 'alert') {
      classesArr.push('alert--simple');
    } else if (alertType === 'form') {
      classesArr.push('alert--form');
    } else if (alertType === 'promo') {
      classesArr.push('alert--promo');
    }

    return classesArr.join(' ');
  };

  const handleClick = () => {
    // setCookie('read', 'true', { path: '/', maxAge: 86400 }); // durée de 14 jours (en secondes)
    setIsOpen(false);
  };

  // useEffect(() => {
  //   if (cookies.read === 'true') {
  //     setIsOpen(false);
  //   } else {
  //     setIsOpen(true);
  //   }
  // }, [cookies]);

  return (
    <Portal>
      <div className={`${isOpen === true ? 'visible' : 'invisible'}`}>
        <AlertStyles className={handleWarningPosition(alertPosition, type)}>
          <button
            type="button"
            className="close"
            onClick={(e) => handleClick(e)}
          >
            <Close />
            <span className="sr-only">Fermer</span>
          </button>
          {type && type === 'alert' && (
            <AlertSimple content={alertDestiny[0]} />
          )}
          {type && type === 'form' && <AlertForm content={alertDestiny[0]} />}
          {type && type === 'promo' && <AlertPromo content={alertDestiny[0]} />}
        </AlertStyles>
      </div>
    </Portal>
  );
}
