import * as React from 'react';
const objectAssign = require('object-assign');


const FormError = ({
  children = null,
  isVisible,
  style = {},
  className = ''
}) => {
  const visibleClass = isVisible ? 'block' : 'hide';

  return (
    <div
      className={ `${ className } bold ${ visibleClass } black` }
      style={ objectAssign({}, styles.base, style) }>
      { children }
    </div>
  );
};

const styles = {
  base: {},
};


export default FormError;
