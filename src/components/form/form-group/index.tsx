import * as React from 'react';

interface IFormGroupProps extends React.Props<any> {};

export default function FormGroup({
  children = null
}: IFormGroupProps) {
  return (
    <div className="py2">
      { children }
    </div>
  );
}
