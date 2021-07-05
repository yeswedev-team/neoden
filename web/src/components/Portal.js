// Example from gatsby-plugin-portal
// https://www.gatsbyjs.com/plugins/gatsby-plugin-portal/?=gatsby-plugin-portal#gatsby-gotcha---document-is-undefined

import { Component } from 'react';
import ReactDOM from 'react-dom';

// Use a ternary operator to make sure that the document object is defined
const portalRoot =
  typeof document !== `undefined` ? document.getElementById('portal') : null;

export default class Portal extends Component {
  constructor() {
    super();
    // Use a ternary operator to make sure that the document object is defined
    this.el =
      typeof document !== `undefined` ? document.createElement('div') : null;
    this.el?.setAttribute('role', 'dialog');
    this.el?.setAttribute('aria-modal', 'true');
  }

  componentDidMount = () => {
    portalRoot.appendChild(this.el);
  };

  componentWillUnmount = () => {
    portalRoot.removeChild(this.el);
  };

  render() {
    const { children } = this.props;

    // Check that this.el is not null before using ReactDOM.createPortal
    if (this.el) {
      return ReactDOM.createPortal(children, this.el);
    }
    return null;
  }
}
