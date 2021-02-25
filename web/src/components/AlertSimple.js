import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { getBlogUrl } from '../utils/helpers';
import PortableText from './PortableText';

export default function AlertSimple({ content }) {
  const { alertTitle, _rawAlertText, alertLink } = content;
  return (
    <>
      {alertTitle && <h3>{alertTitle}</h3>}
      {_rawAlertText && <PortableText blocks={_rawAlertText} />}
      {alertLink && (
        <Link
          to={getBlogUrl(alertLink[0].publishedAt, alertLink[0].slug.current)}
          className="button button--brown"
        >
          En savoir plus
        </Link>
      )}
    </>
  );
}
