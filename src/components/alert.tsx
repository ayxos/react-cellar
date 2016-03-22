import * as React from 'react';
import * as classNames from 'classnames';

interface IAlertProps extends React.Props<any> {
  isVisible?: boolean;
  status?: string;
  id?: string;
};

const statusClasses = {
  info: 'bg-blue white',
  warning: 'bg-yellow black',
  success: 'bg-green black',
  error: 'bg-red white',
};

function Alert({
  children = null,
  isVisible,
  status = 'info',
  id = ''
}: IAlertProps) {
  const alertClasses = classNames(['p2', 'bold'], {
    block: isVisible,
    hide: !isVisible,
    [statusClasses[status]]: true,
  });

  return (
    <div
      id={ id }
      className={ alertClasses }>
      { children }
    </div>
  );
};

export default Alert;
