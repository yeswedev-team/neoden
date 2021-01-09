/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import styled from 'styled-components';
import Arrow from '../assets/images/arrow-accordion.svg';

const AccordionStyles = styled.div`
  .accordion-item {
    overflow: hidden;
    transition: max-height 0.6s cubic-bezier(1, 0, 1, 0);
    height: auto;
    max-height: 9999px;
  }

  .accordion-item.collapsed {
    max-height: 0;
    transition: max-height 0.65s cubic-bezier(0, 1, 0, 1);
  }

  .accordion-title {
    align-items: center;
    border-bottom: 1px solid var(--beige);
    cursor: pointer;
    color: var(--brown);
    display: flex;
    font-weight: 600;
    justify-content: space-between;
    padding: 1em 0;

    &:after {
      background: url(${Arrow}) 0 0 no-repeat;
      content: '';
      height: 7px;
      transition: transform 600ms linear;
      width: 16px;
    }

    &:hover,
    &.open {
      color: black;
    }

    &.open {
      &:after {
        transform: rotate(180deg);
      }
    }
  }

  .accordion-content {
    padding: 1em 0;
  }
`;

export default function Accordion({ title, children }) {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <AccordionStyles className="accordion-wrapper">
      <div
        className={`accordion-title ${isOpen ? 'open' : ''}`}
        onClick={() => setOpen(!isOpen)}
      >
        {title}
      </div>
      <div className={`accordion-item ${!isOpen ? 'collapsed' : ''}`}>
        <div className="accordion-content">{children}</div>
      </div>
    </AccordionStyles>
  );
}
