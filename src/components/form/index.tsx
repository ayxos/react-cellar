import * as React from 'react';

interface IFormProps extends React.Props<any> {
  handleSubmit: () => void;
};

export default function Form({
  children = null,
  handleSubmit
}: IFormProps) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}>
      { children }
    </form>
  );
}
