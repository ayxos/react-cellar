import * as React from 'react';

interface INavigatorProps extends React.Props<any> {
  isVisible?: boolean;
  className?: string;
};

const NavigatorItem = ({
  children = null,
  isVisible = true,
  className = ''
}: INavigatorProps) => {
  const visibleClass = isVisible ? 'block' : 'hide';

  return (
    <div
      className={ `${ visibleClass } ${ className }` }
      style={ styles.base }>
      { children }
    </div>
  );
};

const styles = {
  base: {},
};

export default NavigatorItem;
