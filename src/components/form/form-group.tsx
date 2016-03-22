import * as React from 'react';

interface IFormGroupProps extends React.Props<any> {};

function FormGroup({ children = null }) {
  return <div className="py2">
    { children }
  </div>;
}

export default FormGroup;
