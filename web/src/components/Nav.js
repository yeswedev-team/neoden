import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { remCalc } from '../styles/Mixins';
import { mq } from '../styles/breakpoints';

const NavStyles = styled.nav`
  background-color: var(--brown);
  transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-100%)')};
  position: fixed;
  height: 100vh;
  top: 0;
  transition: transform 600ms ease-out;
  width: 100%;
  will-change: transform;
  z-index: 1000;

  .navList {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
  }
  .menuItem {
    font-size: 1.875rem;

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
    position: relative;
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

      &:first-child {
        margin-left: ${remCalc(-15)};
      }
    }
  }
`;

export default function Nav({ navItems, open, setOpen }) {
  const items = navItems.mainNavigation;

  return (
    <NavStyles open={open}>
      <ul className="navList">
        {items.map((item, index) => (
          <li className="menuItem" key={`item-${index}`}>
            <Link
              to={`/${item.slug.current}/`}
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
