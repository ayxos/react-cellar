import * as React from 'react';
import * as classNames from 'classnames';

interface INavigatorProps extends React.Props<any> {
  isVisible?: boolean;
  mr?: boolean;
  ml?: boolean;
};

const NavigatorItem = ({
  children = null,
  isVisible = true,
  mr = false,
  ml = false,
}: INavigatorProps) => {
  const navItemClasses = classNames('truncate', {
    hide: !isVisible,
    mr2: mr,
    ml2: ml,
  });

  return <div className={ navItemClasses }>
    { children }
  </div>;
};

export default NavigatorItem;
