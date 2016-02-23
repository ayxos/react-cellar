import * as React from 'react';
const objectAssign = require('object-assign');

interface IContainerProps extends React.Props<any> {
  style?: Object;
  className?: string;
};

const Container = ({
  children = null,
  style = {},
  className = ''
}: IContainerProps) => (
  <div className={ `container ${ className }` }
        style={ objectAssign({}, styles.base, style) }>
    <div className="clearfix">
      { children }
    </div>
  </div>
);

const styles = {
  base: {},
};

export default Container;
