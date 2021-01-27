import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Wavify from './Wave';
import { mq } from '../styles/breakpoints';

const FormStyles = styled.form`
  background-color: var(--grey);
  position: relative;
  z-index: 3;

  .rgpd label {
    display: block;
    font-size: 0.8125rem;
  }
  input[type='text'],
  input[type='email'],
  textarea {
    border: 1px solid var(--brownlighter);
    color: var(--brown);
    padding: 14px 16px;
    width: 100%;
  }
  .inputs-list {
    display: flex;
    flex-wrap: wrap;
    grid-column-gap: 1em;

    li {
      margin-bottom: 1em;
      width: 100%;

      ${mq[0]} {
        width: calc(50% - 0.5em);
      }
    }
  }
  textarea {
    height: 13rem;
    resize: none;
  }
  p {
    margin-top: 1.5em;

    &.note {
      font-size: 0.8125rem;
      margin-top: 1em;
    }
  }
  .form-header {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    p {
      margin: 0;
      text-align: center;
    }
    .button {
      margin: 0.5rem auto 0;
    }

    ${mq[0]} {
      flex-wrap: nowrap;
      p {
        text-align: left;
      }
      .button {
        margin: 0 0 0 1.25rem;
      }
    }
  }
  .form-footer {
    display: flex;
    justify-content: center;
    padding-bottom: 4.5rem;
    padding-top: 2.125rem;
  }
  button[type='submit'] {
    border: none;
    box-shadow: none;
    cursor: pointer;
    padding-bottom: 1.5625rem;
    padding-top: 1.5625rem;

    &:hover {
      background-color: var(--brownlight);
    }
  }
  .notabene {
    font-size: 0.875rem;
    * {
      margin: 0;
    }
  }
`;

export default function Form() {
  return (
    <FormStyles
      action="/merci"
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <Wavify direction="up" bgcolor="#F2F2F2" />
      <div className="container container--sm">
        <div className="form-header">
          <p>Pour toute réservation de votre séance NEODEN</p>
          <Link to="/offres-bien-etre" className="button button--brown">
            Réserver ou offrir
          </Link>
        </div>
        <p>
          Pour toute autre demande, nous sommes à votre écoute au
          02&nbsp;57&nbsp;96&nbsp;72&nbsp;10 ou via le formulaire ci-dessous :
        </p>
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <p>Bonjour, je suis</p>
        <ul className="inputs-list">
          <li>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="prénom*"
              required
            />
          </li>
          <li>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="nom*"
              required
            />
          </li>
          <li>
            <input
              type="text"
              name="tel"
              id="tel"
              placeholder="téléphone*"
              required
            />
          </li>
          <li>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="e-mail*"
              required
            />
          </li>
        </ul>
        <p>et je voudrais vous dire&nbsp;:</p>
        <textarea name="message" id="message" placeholder="Message*" required />
        <p className="note">* Champs obligatoires</p>
        <div className="rgpd">
          <input type="checkbox" name="rgpd" id="rgpd" required />
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="rgpd">
            En envoyant ce message en ligne, j’accepte que les informations
            saisies soient exploitées pour permettre à la société NEODEN de
            gérer et répondre à la sollicitation qui lui est ainsi adressée.
            Pour en savoir plus, consultez notre politique «Vie privée et
            Cookies».
          </label>
        </div>
        <div className="form-footer">
          <button type="submit" className="button button--brown">
            <span>Envoyer mon message</span>
          </button>
        </div>
        <div className="notabene">
          <p>
            Conformément à la réglementation en vigueur sur les données
            personnelles, vous bénéficiez à tout moment d’un droit d’accès,
            d’interrogation, de portabilité, de rectification, d’effacement de
            vos données personnelles, de limitation du traitement de celles-ci
            ainsi que d'un droit de définir vos directives post-mortem. Vous
            disposez également d'un droit d’opposition au traitement de vos
            données personnelles pour des motifs légitimes et d'un droit de
            saisir l’autorité de contrôle compétente afin d’y introduire une
            réclamation.Pour exercer vos droits, vous pouvez adresser une
            demande à la société NEODEN, par courrier à l’adresse suivante : 16
            boulevard de Berlin 44000 Nantes, ou par e-mail envoyé à
            <a href="mailto:contact@neoden.fr">contact@neoden.fr</a>.
          </p>
        </div>
      </div>
    </FormStyles>
  );
}
