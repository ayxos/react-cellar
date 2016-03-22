import * as React from 'react';
import * as classNames from 'classnames';

interface IButtonProps extends React.Props<any> {
  onClick?: () => void;
  type?: string;
  className?: string;
  id?: string;
};

function Button({
  onClick = null,
  type = 'button',
  className = '',
  id = '',
  children = null
}: IButtonProps) {
  const buttonClasses = classNames('btn', 'btn-primary', className);

  return <button
    id={ id }
    type={ type }
    className={ buttonClasses }
    onClick={ onClick }>
    { children }
  </button>;
}

export default Button;
