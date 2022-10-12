import React from 'react';
import styled from 'styled-components';
import {getBlogUrl} from "../../utils/helpers";

const CtaPlugStyles = styled.section`
.button--brownlight{
    margin : 20px;
    display: inline-block;
}
.container{
    padding-bottom: var(--section-bot-padding);
    padding-top: var(--section-top-padding);
}
.cta-container{
    display: flex;
    justify-content: center;
}
`;

export default function CtaPlug({ title, label, ctas }) {
    let link
    let pagelink
    const links = [];
    ctas.map((cta) => {
            pagelink = cta.ctaPageLink[0];
            if (cta._type === 'post') {
                link = getBlogUrl(pagelink.publishedAt, cta.slug.current);
            } else {
                link = `/${pagelink.slug.current}`;
            }
            return {
                title: cta.title,
                link: link,
            }
        }
    )
  return (
    <CtaPlugStyles className="section">
      <div className="container container--md">
        <h1 className="middle-title">{title}</h1>
          <div class="cta-container">
          {ctas.map((cta) => (
              <a
                  href={`${cta.link}`}
                  className="button button--brownlight"
                  target="_blank"
                  rel="noreferrer"
              >
                  {cta.title}
              </a>
          ))}
          </div>
      </div>
    </CtaPlugStyles>
  );
}