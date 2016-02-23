import * as React from 'react';
const objectAssign = require('object-assign');

interface IModalContentProps extends React.Props<any> {
  style?: Object;
  className?: string;
};

const ModalContent = ({
  children = null,
  style = {},
  className = ''
}: IModalContentProps) => (
  <div
    className={ `${ className } p1 z4 bg-white` }
    style={ objectAssign({}, styles.base, style) }>
    { children }
  </div>
);

const styles = {
  base: {
    width: '25%',
    margin: '4rem auto',
  },
};

export default ModalContent;
