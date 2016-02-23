import * as React from 'react';
const objectAssign = require('object-assign');

interface IButtonProps extends React.Props<any> {
  onClick?: () => void;
  type?: string;
  style?: Object;
  className?: string;
};

const Button = ({
  children = null,
  className = '',
  style = {},
  type = 'button',
  onClick = null,
}: IButtonProps) => (
  <button
    type={ type }
    className={ `btn btn-primary  ${ className }` }
    style={ objectAssign({}, styles.base, style) }
    onClick={ onClick }>
    { children }
  </button>
);

const styles = {
  base: {},
};

export default Button;
