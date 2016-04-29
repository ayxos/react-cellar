import * as React from 'react';

interface IInputProps extends React.Props<any> {
  fieldDefinition: any;
  type?: string;
  placeholder?: string;
  id?: string;
};

export default function Input({
  type = 'text',
  placeholder = '',
  fieldDefinition,
  id = ''
}) {
  return (
    <input
      id={ id }
      className="block col-12 mb1 input"
      type={ type }
      placeholder={ placeholder }
      { ...fieldDefinition } />
  );
}
