import * as React from 'react';
const objectAssign = require('object-assign');

interface IModalContentProps extends React.Props<any> {};

export default function ModalContent({
  children = null
}: IModalContentProps) {
  return (
    <div className="p2 z2 bg-white modal relative">
      { children }
    </div>
  );
}
