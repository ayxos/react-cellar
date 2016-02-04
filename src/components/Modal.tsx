import * as React from 'react';
const objectAssign = require('object-assign');

const Modal = ({ isVisible = false, children = null, style = {} }) => {
  const visibleStyle = isVisible ? styles.visible : styles.hidden;

  return (
    <div
      className="fixed top-0 bottom-0 left-0 right-0 p1"
      style={ objectAssign({}, styles.base, visibleStyle, style) }>
      { children }
    </div>
  );
};

const styles = {
  base: {
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    transition: 'visibility 250ms, opacity 250ms',
  },
  visible: {
    visibility: 'visible',
    opacity: 1,
    zIndex: 999,
  },
  hidden: {
    visibility: 'hidden',
    opacity: 0,
    zIndex: 0,
  },
};


export default Modal;
