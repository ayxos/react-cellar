import * as React from 'react';
const objectAssign = require('object-assign');


const FormGroup = ({ children = null, style = {}, className = '' }) => {
  return (
    <div className={ `p2 ${ className }` }
         style={ objectAssign({}, styles.base, style) }>
      { children }
    </div>
  );
};

const styles = {
  base: {},
};


export default FormGroup;
