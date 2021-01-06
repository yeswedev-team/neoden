import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/images/logo-neoden.inline.svg';
import { pxtoem } from '../styles/Mixins';
import Nav from './Nav';

const HeaderStyles = styled.header`
  /* background: var(--brown); */
  padding-top: ${pxtoem(25)};
  position: fixed;
  width: 100%;
  z-index: 3;

  .container {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
  .logo {
    display: block;
    left: 50%;
    position: absolute;
    top: ${pxtoem(15)};
    transform: translateX(-50%);
    width: ${pxtoem(160)};
  }
`;

const Header = ({ navItems }) => (
  <HeaderStyles>
    <div className="container container--xl">
      <Nav navItems={navItems} />
      <Link to="/">
        <Logo className="logo" />
      </Link>
      <div className="header__actions">
        <a
          href="https://www.nouvellevague.fr"
          className="button"
          target="_blank"
          rel="noreferrer"
        >
          Réserver ou offrir
        </a>
      </div>
    </div>
  </HeaderStyles>
);

export default Header;
