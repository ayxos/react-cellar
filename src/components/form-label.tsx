import * as React from 'react';
const objectAssign = require('object-assign');

interface IFormLabelProps extends React.Props<any> {
  style?: Object;
};

const FormLabel = ({
  children = null,
  style = {}
}: IFormLabelProps) => (
  <label style={ objectAssign({}, styles.base, style) }>
    { children }
  </label>
);

const styles = {
  base: {},
};

export default FormLabel;
