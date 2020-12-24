import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/images/logo-neoden.inline.svg';
import { pxtoem } from '../styles/Mixins';
import Nav from './Nav';

const HeaderStyles = styled.header`
  background: var(--brown);
  padding-top: ${pxtoem(25)};

  .container {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
  .logo {
    display: block;
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
        <Link className="button" to="#">
          Réserver ou offrir
        </Link>
      </div>
    </div>
  </HeaderStyles>
);

export default Header;
