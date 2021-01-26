import React from 'react';
import Layout from './src/components/Layout';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

function anchorScroll(location) {
  // Check for location so build does not fail
  if (location && location.hash) {
    setTimeout(() => {
      // document.querySelector(`${location.hash}`).scrollIntoView({ behavior: 'smooth', block: 'start' });
      const item = document.querySelector(`${location.hash}`).offsetTop;
      console.dir(document.querySelector(`${location.hash}`));
      const mainNavHeight = document.querySelector(`#header`).offsetHeight;
      // console.log(item - mainNavHeight);
      window.scrollTo({
        top: window.innerHeight + item - mainNavHeight - 200,
        left: 0,
        behavior: 'smooth',
      });
    }, 0);
  }
}

export function onRouteUpdate({ location }) {
  anchorScroll(location);
  return true;
}

export function shouldUpdateScroll({
  routerProps: { location },
  getSavedScrollPosition,
}) {
  anchorScroll(location);
  return true;
}
