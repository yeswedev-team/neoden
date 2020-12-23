import { Link } from 'gatsby';
import React from 'react';

import styled from 'styled-components';

const NavStyles = styled.nav``;

export default function Nav({ navItems }) {
  console.log(navItems);
  const items = navItems.mainNavigation;

  return (
    <NavStyles>
      <ul className="navList">
        {items.map((item, index) => (
          <li className="menuItem" key={`item-${index}`}>
            <Link to={item.slug.current}>
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
