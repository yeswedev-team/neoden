import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { remCalc } from '../styles/Mixins';

const NavStyles = styled.nav`
  .navList {
    display: flex;
  }
  .menuItem {
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
    &:first-child {
      margin-left: ${remCalc(-15)};
    }
  }
`;

export default function Nav({ navItems }) {
  const items = navItems.mainNavigation;

  return (
    <NavStyles>
      <ul className="navList">
        {items.map((item, index) => (
          <li className="menuItem" key={`item-${index}`}>
            <Link
              to={`/${item.slug.current}/`}
              activeClassName="active"
              partiallyActive
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
