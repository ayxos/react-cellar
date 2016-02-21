import * as React from 'react';
const objectAssign = require('object-assign');

interface IContentProps extends React.Props<any> {
  isVisible: boolean;
  style?: Object;
};

const Content = ({
  children = null,
  style = {},
  isVisible
}: IContentProps) => (
  <div
    className={ `mt3 p1` }
    style={ objectAssign({}, styles.base, style) }>
    { isVisible ? children : null }
  </div>
);

const styles = {
  base: {},
};

export default Content;
