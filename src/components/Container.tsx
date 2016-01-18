import * as React from 'react';
const objectAssign = require('object-assign');


const Container = ({ children, style = {}, className = '' }) => {
  return (
    <div className={ `container ${ className }` }
         style={ objectAssign({}, styles.base, style) }>
      <div className="clearfix">
        { children }
      </div>
    </div>
  );
};

const styles = {
  base: {},
};


export default Container;
