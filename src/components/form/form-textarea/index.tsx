import * as React from 'react';

interface IFieldDefinition {
  value?: string;
  onBlur?: () => void;
  onChange?: () => void;
  onFocus?: () => void;
}

interface IInputProps extends React.Props<any> {
  fieldDefinition?: IFieldDefinition;
  placeholder?: string;
  id?: string;
};

export default function Textarea({
  rows = '4',
  cols = '50',
  placeholder = '',
  fieldDefinition = {} as IFieldDefinition,
  id = ''
}) {
  const {
    value,
    onBlur,
    onChange,
    onFocus
  } = fieldDefinition;

  return (
    <textarea
      id={ id }
      rows={ rows }
      cols={ cols }
      className="block col-12 mb1 textarea"
      placeholder={ placeholder }
      value={ value }
      onBlur={ onBlur }
      onChange={ onChange }
      onFocus={ onFocus } />
  );
}
