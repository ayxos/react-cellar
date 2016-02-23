import * as React from 'react';
import Button from './button';

interface ICounterProps extends React.Props<any> {
  counter?: number;
  increment: () => void;
  decrement: () => void;
};

const Counter = ({
  counter = 0,
  decrement,
  increment
}: ICounterProps) => (
  <div className="flex">
    <div className="flex-auto flex-center center">
      <Button
        style={ styles.squareButton }
        className="btn btn-primary bg-black"
        onClick={ decrement }>
        -
      </Button>
    </div>

    <div className="flex-auto flex-center center h1">
      { counter }
    </div>

    <div className="flex-auto flex-center center">
      <Button
        style={ styles.squareButton }
        className="btn btn-primary"
        onClick={ increment }>
        +
      </Button>
    </div>
  </div>
);

const styles = {
  squareButton: {
    width: 48,
    height: 48,
  },
};

export default Counter;
