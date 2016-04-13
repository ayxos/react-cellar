import * as React from 'react';

interface IFormLabelProps extends React.Props<any> {
  id?: string;
};

export default function FormLabel({
  children = null,
  id = ''
}: IFormLabelProps) {
  return (
    <label id={ id }>
      { children }
    </label>
  );
}
