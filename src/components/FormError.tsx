import * as React from 'react';
const objectAssign = require('object-assign');

interface IFormErrorProps extends React.Props<any> {
  isVisible: boolean;
  style?: Object;
  className?: string;
};

const FormError = ({
  children = null,
  isVisible,
  style = {},
  className = ''
}: IFormErrorProps) => {
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
