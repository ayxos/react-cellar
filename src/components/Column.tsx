import * as React from 'react';
const objectAssign = require('object-assign');


const Column = ({ children = null, className = '', style = {} }) => {
  return (
    <div className={ `col ${ className }` }
         style={ objectAssign({}, styles.base, style) }>
      { children }
    </div>
  );
};

const styles = {
  base: {},
};


export default Column;
