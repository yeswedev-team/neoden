import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/images/logo-neoden.inline.svg';
import LogoOnly from '../assets/images/logo-neoden-seul.inline.svg';
import PortableText from './PortableText';
import WaveBg from '../assets/images/wave-beige.svg';
import { pxtopc } from '../styles/Mixins';

const FooterStyles = styled.footer`
  background-color: var(--brownlight);
  color: var(--white);
  padding-top: 3.4375rem;
  position: relative;

  a {
    color: var(--white);
  }

  .label {
    color: var(--brownlighter);
    margin-top: 0;
  }

  li,
  .label {
    font-size: 0.875rem;
    font-weight: 500;
  }

  .container {
    display: flex;
    justify-content: space-between;
    padding-bottom: 4.5625rem;
  }
  .button {
    color: var(--brown);
    display: block;
    margin-bottom: 0.9375rem;
  }
  .wave-up,
  .wave-up-bis {
    background: url(${WaveBg}) 0 0 repeat;
    height: 45px;
    transform: translateY(-100%);
  }
  .logos {
    padding-left: 15px;
    width: ${pxtopc(250, 1278)};
  }
  .logo-footer-only {
    display: block;
    width: 4.125rem;
  }
  .logo-footer {
    display: block;
    margin-top: 0.9375rem;
    width: 8.4375rem;
  }
  nav {
    width: ${pxtopc(112, 1278)};
  }
  .footer__address,
  .footer__contact,
  .footer__networks {
    font-size: 0.875rem;
  }
  .footer__address {
    width: ${pxtopc(196, 1278)};
  }
  .footer__contact {
    width: ${pxtopc(167, 1278)};
  }
  .footer__networks {
    width: ${pxtopc(202, 1278)};
  }
  .footer__actions {
    padding-right: 15px;
  }
  .copyright {
    border-top: 1px solid var(--white);
    padding: 18px 0;

    p {
      margin: 0;
      text-align: center;
    }
  }
`;

const Footer = ({ footerItems }) => {
  console.log(footerItems);
  const {
    tel,
    facebook,
    linkedin,
    instagram,
    twitter,
    footerNavigation,
    _rawAddress,
    _rawContact,
  } = footerItems;

  return (
    <FooterStyles className="has-wave has-wave-up">
      <div className="wave-up" />
      <div className="wave-up-bis" />
      <div className="container container--xl">
        <div className="logos">
          <Link to="/">
            <LogoOnly className="logo-footer-only" />
            <Logo className="logo-footer" />
          </Link>
        </div>
        <nav>
          <p className="label">Neoden</p>
          <ul>
            {footerNavigation.map((item) => (
              <li key={item.id}>
                <Link to={`/${item.slug.current}`}>
                  {item.page.titleMenu ? (
                    <span className="text">{item.page.titleMenu.fr}</span>
                  ) : (
                    <span className="text">{item.page.title.fr}</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {_rawAddress && (
          <div className="footer__address">
            <p className="label">Adresse</p>
            <PortableText blocks={_rawAddress} />
          </div>
        )}
        {_rawContact && (
          <div className="footer__contact">
            <p className="label">Contact</p>
            <PortableText blocks={_rawContact} />
          </div>
        )}
        <div className="footer__networks">
          <p className="label">Réseaux sociaux</p>
          <ul>
            {facebook && (
              <li>
                <a href={facebook} target="_blank" rel="noreferrer">
                  Facebook
                </a>
              </li>
            )}
            {linkedin && (
              <li>
                <a href={linkedin} target="_blank" rel="noreferrer">
                  Linkedin
                </a>
              </li>
            )}
            {instagram && (
              <li>
                <a href={instagram} target="_blank" rel="noreferrer">
                  Instagram
                </a>
              </li>
            )}
            {twitter && (
              <li>
                <a href={twitter} target="_blank" rel="noreferrer">
                  Twitter
                </a>
              </li>
            )}
          </ul>
        </div>
        <div className="footer__actions">
          <a
            href="https://www.nouvellevague.fr"
            className="button"
            target="_blank"
            rel="noreferrer"
          >
            Réserver ou offrir
          </a>
          {tel && (
            <a
              href={`tel:${tel}`}
              className="button"
              target="_blank"
              rel="noreferrer"
            >
              Nous appeler
            </a>
          )}{' '}
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2020 - Neoden</p>
      </div>
    </FooterStyles>
  );
};

export default Footer;
