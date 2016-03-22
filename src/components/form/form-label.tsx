import * as React from 'react';

interface IFormLabelProps extends React.Props<any> {
  id?: string;
};

function FormLabel({ children = null, id = '' }) {
  return <label id={ id }>
    { children }
  </label>;
}

export default FormLabel;
