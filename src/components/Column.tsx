import * as React from 'react';
const objectAssign = require('object-assign');

interface IColumnProps extends React.Props<any> {
  className?: string;
  style?: Object;
};

const Column = ({
  children = null,
  className = '',
  style = {}
}: IColumnProps) => (
  <div className={ `col ${ className }` }
        style={ objectAssign({}, styles.base, style) }>
    { children }
  </div>
);

const styles = {
  base: {},
};

export default Column;
