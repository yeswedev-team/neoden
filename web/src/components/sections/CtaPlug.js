import React from 'react';
import styled from 'styled-components';
import {getBlogUrl} from "../../utils/helpers";
import KalendesWidget from "../KalendesWidget";

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
h2{
    text-align: center;
}
`;

export default function CtaPlug({ title, label, ctas }) {
    let link
    let pagelink
    const links = [];
    const kalendesLinks = [];
    ctas.forEach((cta) => {
        pagelink = cta.ctaPageLink[0];
        link = null;
        if (cta._type === 'post') {
            link = getBlogUrl(pagelink.publishedAt, cta.slug.current);
        } else {
            if(pagelink){
                link = `/${pagelink.slug.current}`;
            }
        }
        if(link){
            links.push({
                title: cta.title,
                link: link,
            });
        } else {
            kalendesLinks.push({
                title: cta.title
            });
        }
    })
  return (
    <CtaPlugStyles className="section">
      <div className="container container--md">
        <h2 className="middle-title">{title}</h2>
          <div className="cta-container">
          {links.map((cta) => (
              <a
                  href={`${cta.link}`}
                  className="button button--brownlight"
                  target="_blank"
                  rel="noreferrer"
              >
                  {cta.title}
              </a>
          ))}
          {kalendesLinks.map((cta) => (
              <KalendesWidget className="button button--brown" title="Nous contacter"/>
          ))}
          </div>
      </div>
    </CtaPlugStyles>
  );
}
