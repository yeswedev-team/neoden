import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { remCalc } from '../styles/Mixins';
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
      border: 1px solid var(--brownlight);
      border-radius: 0.375rem;
      left: 50%;
      opacity: 0;
      pointer-events: none;
      position: absolute;
      transform: translate(-50%, -10px);
      transition: opacity 300ms linear, transform 300ms ease-out,
        background 300ms linear;

      &:hover {
        background: var(--brown);

        .sub-menu-item {
          a {
            color: var(--white);
          }
        }
      }
    }
    .sub-menu-item {
      font-size: 0.9em;
      text-align: left;

      a {
        color: var(--brown);
        padding: ${remCalc(5)} ${remCalc(15)};
        transition: color 300ms linear;

        span:after {
          display: none;
        }

        &:hover {
          text-decoration: underline;

          span:after {
            display: none;
          }
        }

        &.active,
        &[aria-current='page'] {
          font-weight: bold;

          span {
            &:after {
              display: none !important;
            }
          }
        }
      }
    }
  }
`;

export default function Nav({ navItemsRight, open, setOpen, navRightUrlItem }) {
  const items = navItemsRight?.mainRightNavigation;
  const urlItem = navRightUrlItem?.urlfield;

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
        <li className="menuItem">
          <span>Contact</span>
          <ul className="sub-menu">
            <li key="sub-item-0" className="sub-menu-item">
              <Link
                to={urlItem}
                activeClassName="active"
                partiallyActive
                onClick={() => {
                  setOpen(!open);
                }}
              >
                <span className="text">Prendre rdv téléphone</span>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </NavStyles>
  );
}
