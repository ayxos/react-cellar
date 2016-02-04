import * as React from 'react';
const objectAssign = require('object-assign');


const Content = ({ children = null, style = {}, isVisible }) => {
  return (
    <div
      className={ `mt3 p1` }
      style={ objectAssign({}, styles.base, style) }>
      { isVisible ? children : null }
    </div>
  );
};

const styles = {
  base: {},
};

export default Content;
