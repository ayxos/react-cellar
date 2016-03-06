import * as React from 'react';
import * as ReduxForm from 'redux-form';
const objectAssign = require('object-assign');

interface IInputProps extends React.Props<any> {
  fieldDefinition: ReduxForm.FieldProp;
  type?: string;
  placeholder?: string;
  style?: Object;
};

const Input = ({
  type = 'text',
  style = {},
  placeholder = '',
  fieldDefinition,
}: IInputProps) => (
  <input
    className="block col-12 mb1 input"
    style={ objectAssign({}, styles.base, style) }
    type={ type }
    placeholder={ placeholder }
    { ...fieldDefinition } />
);

const styles = {
  base: {},
};

export default Input;
