import * as React from 'react';
const objectAssign = require('object-assign');


const ModalContent = ({ children, style = {}, className = '' }) => {
  return (
    <div
      className={ `${ className } p1 z4 bg-white` }
      style={ objectAssign({}, styles.base, style) }>
      { children }
    </div>
  );
};

const styles = {
  base: {
    width: '25%',
    margin: '4rem auto',
  },
};


export default ModalContent;
