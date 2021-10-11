import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { remCalc } from '../styles/Mixins';
import { mq } from '../styles/breakpoints';

const NavStyles = styled.nav`
  background-color: var(--brown);
  position: fixed;
  height: 50vh;
  left: 0;
  top: calc(50vh - 1px);
  transition: transform 600ms ease-out;
  transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-200%)')};
  width: 100%;
  will-change: transform;
  z-index: 1000;

  .navList {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-start;
  }
  .menuItem {
    font-size: 1.25rem;

    a {
      color: var(--white);
      display: block;
      padding: ${remCalc(10)} ${remCalc(15)};

      span {
        &:after {
          background-color: var(--white);
          content: '';
          display: block;
          height: 1px;
          transform: scaleX(0);
          transition: transform 200ms ease-in;
          transform-origin: left top;
          width: 100%;
        }
      }
      &:hover span:after {
        transform: scaleX(1);
      }

      &.active,
      &[aria-current='page'] {
        span {
          position: relative;

          &:after {
            background-color: var(--white);
            content: '';
            display: block;
            height: 1px;
            transform: scaleX(1);
            width: 100%;
          }
        }
      }
    }
  }

  ${mq[3]} {
    background-color: transparent;
    height: auto;
    margin-right: 1.25rem;
    position: relative;
    top: auto;
    transform: none;
    transition: none;
    width: auto;

    .navList {
      align-items: flex-start;
      flex-direction: row;
      height: auto;
      justify-content: flex-start;
    }
    .menuItem {
      font-size: 1rem;
    }
  }
`;

export default function Nav({ navItemsRight, open, setOpen }) {
  const items = navItemsRight?.mainRightNavigation;

  return (
    <NavStyles open={open}>
      <ul className="navList">
        {items?.map((item, index) => (
          <li className="menuItem" key={`item-right-${index}`}>
            <Link
              to={`/${item.slug.current}`}
              activeClassName="active"
              partiallyActive
              onClick={() => {
                setOpen(!open);
              }}
            >
              {item.page.titleMenu ? (
                <span className="text">{item.page.titleMenu.fr}</span>
              ) : (
                <span className="text">{item.page.title.fr}</span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </NavStyles>
  );
}
