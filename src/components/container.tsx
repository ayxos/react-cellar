import * as React from 'react';
import * as classNames from 'classnames';

interface IContainerProps extends React.Props<any> {
  size: number;
  center: boolean;
};

function Container({
  size = 1,
  center = false,
  children = null
}: IContainerProps) {
  const containerClasses = classNames('clearfix', 'px1', {
    'max-width-1': size === 1,
    'max-width-2': size === 2,
    'max-width-3': size === 3,
    'max-width-4': size === 4,
    'mx-auto': center,
  });

  return <div className={ containerClasses }>
    { children }
  </div>;
}

export default Container;
