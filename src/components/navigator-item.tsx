import * as React from 'react';
import * as classNames from 'classnames';

interface INavigatorItemProps extends React.Props<any> {
  isVisible?: boolean;
  mr?: boolean;
  ml?: boolean;
};

export default function NavigatorItem({
  children = null,
  isVisible = true,
  mr = false,
  ml = false,
}: INavigatorItemProps) {
  const navItemClasses = classNames('truncate', {
    hide: !isVisible,
    mr2: mr,
    ml2: ml,
  });

  return (
    <div className={ navItemClasses }>
      { children }
    </div>
  );
};
