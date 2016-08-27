import * as React from 'react';
import { Navbar } from 'react-bootstrap';

const styles = {
    height: '15px',
    padding: '5%',
    width: 150
};

export default function Logo() {
  return (
    <Navbar.Header>
      <Navbar.Brand className="flex items-center">
        <h1 style={ styles }> React Cellar </h1>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
  );
}
