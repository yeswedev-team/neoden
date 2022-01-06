import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { getBlogUrl } from '../utils/helpers';
import PortableText from './PortableText';

const AlertSimpleStyles = styled.div`
  .alert__content {
    padding-bottom: 2.6875rem;
    padding-top: 2.6875rem;
  }
`;

export default function AlertSimple({ content }) {
  const { alertTitle, _rawAlertText, alertLink, alertLinkText, image } =
    content;
  // console.log(image);
  const btnText = alertLinkText || 'En savoir plus';
  return (
    <AlertSimpleStyles>
      {image && (
        <div className="img-container">
          <GatsbyImage image={getImage(image?.asset)} alt={alertTitle} />
        </div>
      )}
      <div className="alert__content">
        {alertTitle && <h3>{alertTitle}</h3>}
        {_rawAlertText && <PortableText blocks={_rawAlertText} />}
        {alertLink && (
          <Link
            to={getBlogUrl(
              alertLink[0]?.publishedAt,
              alertLink[0]?.slug?.current
            )}
            className="button button--brown"
          >
            {btnText}
          </Link>
        )}
      </div>
    </AlertSimpleStyles>
  );
}
