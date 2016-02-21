import * as React from 'react';
const objectAssign = require('object-assign');

interface IFormProps extends React.Props<any> {
  handleSubmit: () => void;
  style?: Object;
};

const Form = ({
  children = null,
  style = {},
  handleSubmit
}: IFormProps) => (
  <form
    style={ objectAssign({}, styles.base, style) }
    onSubmit={(e) => {
      e.preventDefault();
      const activeElement = document.activeElement as HTMLElement;
      if (activeElement.blur) {
        activeElement.blur();
      }
      handleSubmit();
    }}>
    { children }
  </form>
);

const styles = {
  base: {},
};

export default Form;
