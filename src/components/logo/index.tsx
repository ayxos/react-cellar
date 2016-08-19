import * as React from 'react';
const LogoImage = require('../../assets/rangleio-logo.svg');
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

const styles = { width: 128 };

export default function Logo() {
  return (
    <Navbar.Header>
      <Navbar.Brand className="flex items-center">
        <img style={ styles }
          src={ LogoImage }
          alt="Rangle.io" />
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
  );
}
