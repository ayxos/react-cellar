import * as React from 'react';
const objectAssign = require('object-assign');

interface IModalContentProps extends React.Props<any> {};

function ModalContent({
  children = null
}: IModalContentProps) {
  return <div className="p2 z2 bg-white modal relative">
    <button className="btn absolute top-0 right-0 m1"
      onClick={ close }>
      ✖︎
    </button>
    { children }
  </div>;
}

export default ModalContent;
