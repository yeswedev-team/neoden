import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/images/logo-neoden.inline.svg';
import LogoOnly from '../assets/images/logo-neoden-seul.inline.svg';
import PortableText from './PortableText';
import { lsEm, pxtopc } from '../styles/Mixins';
import { mq } from '../styles/breakpoints';

const FooterStyles = styled.footer`
  background-color: var(--brownlight);
  color: var(--white);
  padding-top: 6.25rem;
  position: relative;

  a {
    color: var(--white);

    &:hover {
      text-decoration: underline;
    }
  }

  .label {
    color: var(--beigedark);
    font-weight: 600;
    letter-spacing: ${lsEm(40)};
    margin-top: 0;

    ${mq[2]} {
      color: var(--brownlighter);
    }
  }

  li,
  .label {
    font-size: 0.875rem;
  }
  li {
    font-weight: 500;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-bottom: 4.5625rem;
    max-width: 10.4375rem;

    ${mq[0]} {
      max-width: 20rem;
    }
    ${mq[1]} {
      max-width: 90%;
    }
  }
  .button {
    color: var(--brown);
    display: block;
    margin-bottom: 0.9375rem;
    padding: 0.5rem;

    &:hover {
      color: var(--white);
    }

    ${mq[2]} {
      padding: 0.5rem 1.875rem;
    }
  }
  .logos,
  nav,
  .footer__address,
  .footer__contact,
  .footer__networks,
  .footer__actions {
    margin-top: 2.1875rem;
    width: 100%;

    ${mq[0]} {
      width: 50%;
    }
    ${mq[1]} {
      margin-top: 0;
      width: 30%;
    }
  }

  .logos {
    margin-bottom: 0.5625rem;
    margin-top: 0;

    ${mq[0]} {
      width: 100%;
    }
    ${mq[1]} {
      margin-bottom: 2rem;
      width: 30%;
    }
    ${mq[2]} {
      margin-bottom: 0;
      padding-left: 15px;
      width: ${pxtopc(180, 1278)};
    }
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
    ${mq[2]} {
      width: ${pxtopc(232, 1278)};

      ul {
        column-gap: 1rem;
        display: flex;
        flex-wrap: wrap;
      }
      li {
        width: calc(50% - 0.5rem);
      }
    }
  }
  .footer__address,
  .footer__contact,
  .footer__networks {
    font-size: 0.875rem;
  }
  .footer__address {
    ${mq[1]} {
      width: 30%;
    }
    ${mq[2]} {
      padding-left: 20px;
      width: ${pxtopc(196, 1278)};
    }
  }
  .footer__contact {
    a:after {
      display: none;
    }
    a:hover {
      color: var(--white);
      text-decoration: underline;
    }

    ${mq[2]} {
      width: ${pxtopc(137, 1278)};
    }
  }
  .footer__networks {
    ${mq[2]} {
      width: ${pxtopc(162, 1278)};
    }
  }
  .footer__actions {
    padding-right: 15px;

    a:hover {
      text-decoration: none;
    }

    ${mq[0]} {
      width: 100%;
    }
    ${mq[1]} {
      width: 30%;
    }
    ${mq[2]} {
      width: auto;
    }
  }
  .copyright {
    align-items: center;
    border-top: 1px solid var(--white);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 18px 0;

    p {
      font-size: 0.875rem;
      margin: 0 0.5rem 0 0;
      text-align: center;
    }
    ul {
      display: flex;
      flex-direction: column;
    }
    li {
      font-size: 0.875rem;
      margin: 0;
      text-align: center;

      &:before {
        content: ' - ';
        display: none;
      }
      a {
        padding: 0 8px;
      }
    }
    ${mq[2]} {
      flex-direction: row;

      ul {
        flex-direction: row;
        justify-content: flex-start;
      }
      li {
        text-align: left;
      }
      li:before {
        display: inline-block;
      }
    }
  }
`;

const Footer = ({ footerItems }) => {
  const {
    tel,
    facebook,
    linkedin,
    instagram,
    youtube,
    footerNavigation,
    copyNavigation,
    _rawAddress,
    _rawContact,
  } = footerItems;

  return (
    <FooterStyles className="has-wave has-wave-up">
      <div className="container container--xl-after-md">
        <div className="logos">
          <Link to="/">
            <LogoOnly className="logo-footer-only" />
            <Logo className="logo-footer" />
          </Link>
        </div>
        <nav>
          <p className="label">Neoden</p>
          <ul>
            {footerNavigation?.map((item) => (
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
            {youtube && (
              <li>
                <a href={youtube} target="_blank" rel="noreferrer">
                  Youtube
                </a>
              </li>
            )}
          </ul>
        </div>
        <div className="footer__actions">
          <a
            href="https://app.kiute.com/neoden/home"
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
        <p>&copy; 2022 - Neoden</p>
        <ul>
          {copyNavigation.map((item) => (
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
      </div>
    </FooterStyles>
  );
};

export default Footer;
