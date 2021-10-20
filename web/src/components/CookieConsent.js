import * as React from 'react';
import { useLocation } from '@gatsbyjs/reach-router'; // this helps tracking the location
import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies';
import styled from 'styled-components';

const CookieConsentStyles = styled.div`
  align-items: baseline;
  background: #e1e0dc;
  bottom: 0;
  color: #916d5b;
  display: flex;
  font-size: 0.875rem;
  justify-content: space-between;
  left: 0;
  position: fixed;
  width: 100%;
  z-index: 999;

  div {
    margin: 15px;
  }

  button {
    background: #fff;
    border-radius: 5px;
    border: none;
    box-shadow: none;
    color: #916d5b;
    cursor: pointer;
    font-size: 0.875rem;
    margin: 15px;
    flex: 0 0 auto;
    padding: 5px 10px;
  }
`;

function isBrowser() {
  return typeof window !== 'undefined';
}

function getValue(key, defaultValue) {
  return isBrowser() && window.localStorage.getItem(key)
    ? JSON.parse(window.localStorage.getItem(key))
    : defaultValue;
}

function setValue(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

function useStickyState(defaultValue, key) {
  const [value, setter] = React.useState(() => getValue(key, defaultValue));

  React.useEffect(() => {
    setValue(key, value);
  }, [key, value]);

  return [value, setter];
}

const CookieConsent = () => {
  const location = useLocation();

  if (isBrowser()) {
    initializeAndTrack(location);
  }

  const [bannerHidden, setBannerHidden] = useStickyState(
    false,
    'consentCookieHidden'
  );

  const EnableAnalytics = () => {
    const now = new Date();
    const time = now.getTime();
    const expireTime = time + 1000 * 36000 * 90;
    now.setTime(expireTime);

    document.cookie = `gatsby-gdpr-google-analytics=true;expires=${now.toUTCString()}`;
    setBannerHidden(true);
  };

  const DisableAnalytics = () => {
    const now = new Date();
    const time = now.getTime();
    const expireTime = time + 1000 * 36000 * 90;
    now.setTime(expireTime);

    document.cookie = `gatsby-gdpr-google-analytics=false;expires=${now.toUTCString()}`;
    setBannerHidden(true);
  };

  return (
    <>
      {!bannerHidden && (
        <CookieConsentStyles>
          <div>
            <span>
              En continuant à utiliser le site, vous acceptez l’utilisation de
              cookies.
            </span>
          </div>
          <div>
            <button
              className="decline"
              type="button"
              onClick={DisableAnalytics}
            >
              Je refuse
            </button>
            <button className="accept" type="button" onClick={EnableAnalytics}>
              J'accepte
            </button>
          </div>
        </CookieConsentStyles>
      )}
    </>
  );
};

export default CookieConsent;
