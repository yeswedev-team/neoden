import React from 'react';
import { CookiesProvider } from 'react-cookie';
import Layout from './src/components/Layout';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}

export function wrapRootElement({ element }) {
  return <CookiesProvider>{element}</CookiesProvider>;
}
