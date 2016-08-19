import * as React from 'react';
import { Navbar } from 'react-bootstrap';

interface INavigatorProps extends React.Props<any> {
  testid?: string;
}

export default function Navigator({
  children = null,
  testid = ''
}: INavigatorProps) {
  return (
    <Navbar
      data-testid={ testid }
      className="flex items-center p1 bg-white border-bottom navbar-inner">
      { children }
    </Navbar>
  );
}
