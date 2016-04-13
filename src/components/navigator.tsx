import * as React from 'react';

interface INavigatorProps extends React.Props<any> {}

export default function Navigator({ children = null }: INavigatorProps) {
  return (
    <nav className="flex items-center p1 bg-white border-bottom">
      { children }
    </nav>
  );
}
