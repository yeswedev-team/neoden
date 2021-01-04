import React from 'react';
import { Link } from 'gatsby';

export default function Button({ target, styles, title }) {
  return (
    <Link to={target} className={`button ${styles ? `button--${styles}` : ''}`}>
      {title}
    </Link>
  );
}
