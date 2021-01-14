import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { pxtoem } from '../styles/Mixins';
import Wave from './Wave';

const FormStyles = styled.form`
  background-color: var(--grey);
  /* padding-top: ${pxtoem(45)}; */
  position: relative;
  z-index: 3;

  .rgpd label {
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
      width: calc(50% - 0.5em);
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
    justify-content: flex-start;
    p {
      margin: 0;
    }
    .button {
      margin-left: 1.25rem;
    }
  }
  .form-footer {
    display: flex;
    justify-content: flex-end;
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
  .infos-pratiques {
    border-top: 1px solid var(--beige);
    padding-bottom: 110px;
    padding-top: 4.0625rem;
    text-align: center;
    .button {
      margin-top: 1.625rem;
    }
  }
`;

export default function Form(params) {
  return (
    <FormStyles
      action="/merci"
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <Wave bgcolor="#F2F2F2" />
      <div className="container container--sm">
        <div className="form-header">
          <p>Pour toute réservation de votre séance NEODEN</p>
          <Link to="/offres-bien-etre" className="button button--brown">
            Réserver ou offrir
          </Link>
        </div>
        <p>
          Pour toute autre demande, nous sommes à votre écoute au 00 00 00 00 00
          ou via le formulaire ci-dessous :
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
        <div className="infos-pratiques">
          <h2 className="middle-title">
            Pour retrouver
            <br />
            toutes les informations pratiques
          </h2>
          <Link
            to="/flottaison-isolation-sensorielle"
            className="button button--brown"
          >
            cliquez ici
          </Link>
        </div>
      </div>
      <Wave bgcolor="#F2F2F2" reversed />
    </FormStyles>
  );
}
