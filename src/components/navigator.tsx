import * as React from 'react';

interface INavigatorProps extends React.Props<any> {}

function Navigator({ children = null }) {
  return <nav className="flex items-center p1 bg-white border-bottom">
    { children }
  </nav>;
}

export default Navigator;
