import * as React from 'react';
import * as classNames from 'classnames';

interface IFormErrorProps extends React.Props<any> {
  isVisible: boolean;
  id?: string;
};

export default function FormError({
  children = null,
  isVisible,
  id = ''
}: IFormErrorProps) {
  const formErrorClasses = classNames('bold', 'black', { 'hide': !isVisible });

  return (
    <div className={ formErrorClasses } id={ id }>
      { children }
    </div>
  );
}
