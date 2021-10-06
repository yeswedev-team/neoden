import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { pxtoem, remCalc } from '../styles/Mixins';
import { mq } from '../styles/breakpoints';

const NavStyles = styled.nav`
  background-color: var(--brown);
  left: 0;
  position: fixed;
  height: 50vh;
  top: 0;
  transition: transform 600ms ease-out;
  transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-100%)')};
  width: 100%;
  will-change: transform;
  z-index: 1000;

  .navList {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-end;
  }
  .menuItem {
    font-size: 1.25rem;
    position: relative;

    > span {
      color: var(--white);
      cursor: pointer;
      display: none;
      padding: ${remCalc(10)} ${remCalc(15)};
    }

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

  .sub-menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px 0;
  }
  .sub-menu-item {
    text-align: center;
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

      > span {
        display: block;
      }

      &:hover {
        .sub-menu {
          opacity: 1;
          transform: translate(-50%, -1px);
          pointer-events: auto;
        }
      }

      &:first-child {
        margin-left: ${remCalc(-15)};
      }
    }
    .sub-menu {
      background: var(--white);
      border: 1px solid var(--brown);
      border-radius: 0.375rem;
      left: 50%;
      min-width: ${pxtoem(275)};
      opacity: 0;
      pointer-events: none;
      position: absolute;
      transform: translate(-50%, -10px);
      transition: opacity 300ms linear, transform 300ms ease-out;
    }
    .sub-menu-item {
      a {
        color: var(--brown);
        padding: ${remCalc(5)} ${remCalc(15)};
      }
    }
  }
`;

export default function Nav({ navItems, offersItems, open, setOpen }) {
  const items = navItems?.mainNavigation;
  const subItems = offersItems?.offersAltNav;

  return (
    <NavStyles open={open}>
      <ul className="navList">
        {items?.map((item, index) => {
          const slug = item.slug.current === 'home' ? '' : item.slug.current;
          return (
            <li className="menuItem" key={`item-${index}`}>
              <Link
                to={`/${slug}`}
                activeClassName="active"
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
          );
        })}
        <li className="menuItem">
          <span>Nos autres offres</span>
          <ul className="sub-menu">
            {subItems?.map((item, index) => (
              <li key={`sub-item-${index}`} className="sub-menu-item">
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
        </li>
      </ul>
    </NavStyles>
  );
}
