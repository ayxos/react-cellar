import * as React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions/counter';
import Counter from '../components/counter';
import Container from '../components/container';
import Column from '../components/column';


interface ICounterPageProps extends React.Props<any> {
  counter: number;
  increaseCounter: () => void;
  decreaseCounter: () => void;
};

function mapStateToProps(state) {
  return {
    counter: state.counter.get('count'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increaseCounter: (): void => dispatch(increment()),
    decreaseCounter: (): void  => dispatch(decrement()),
  };
}

class CounterPage extends React.Component<ICounterPageProps, void> {
  render() {
    const { counter, increaseCounter, decreaseCounter } = this.props;
 
    return (
      <Container>
        <Column className="col-4">
          <h1 className="center">Counter</h1>

          <Counter
            counter={ counter }
            increment={ increaseCounter }
            decrement={ decreaseCounter } />
        </Column>
      </Container>
    ); 
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterPage);
