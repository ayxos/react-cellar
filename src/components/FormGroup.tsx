import * as React from 'react';
const objectAssign = require('object-assign');

interface IFormGroupProps extends React.Props<any> {
  style?: Object;
  className?: string;
};

const FormGroup = ({
  children = null,
  style = {},
  className = ''
}: IFormGroupProps) => (
  <div className={ `p2 ${ className }` }
        style={ objectAssign({}, styles.base, style) }>
    { children }
  </div>
);

const styles = {
  base: {},
};

export default FormGroup;
