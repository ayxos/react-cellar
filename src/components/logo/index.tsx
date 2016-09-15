import * as React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router';

const styles = {
    height: '40px',
    padding: '5%',
    width: 150
};

export default function Logo() {
  return (
    <Navbar.Header>
      <Navbar.Brand className="flex items-center">
        <Link style={ styles } to={`/`}>
          <h1 > React Cellar </h1>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
  );
}
