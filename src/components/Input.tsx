import * as React from 'react';
const objectAssign = require('object-assign');


const Input = (props) => {
  const {
    type = 'text',
    style = {},
    placeholder = '',
    fieldDefinition,
  } = props;

  return (
    <input
      className="block col-12 mb1 field"
      style={ objectAssign({}, styles.base, style) }
      type={ type }
      placeholder={ placeholder }
      { ...fieldDefinition } />
  );
};

const styles = {
  base: {},
};


export default Input;
