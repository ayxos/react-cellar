import * as React from 'react';
import Button from './button';

interface ICounterProps extends React.Props<any> {
  counter: number;
  increment: () => void;
  decrement: () => void;
};

function Counter({ counter, increment, decrement }) {
  return <div className="flex">
    <Button className="bg-black col-2"
      onClick={ decrement }>
      -
    </Button>

    <div className="flex-auto center h1">
      { counter }
    </div>

    <Button className="col-2"
      onClick={ increment }>
      +
    </Button>
  </div>;
}

export default Counter;
