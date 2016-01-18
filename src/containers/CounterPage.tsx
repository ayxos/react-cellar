import * as React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions/counter';
import Counter from '../components/Counter';
import Container from '../components/Container';
import Column from '../components/Column';


function mapStateToProps(state) {
  return {
    counter: state.counter.get('count'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increaseCounter: () => dispatch(increment()),
    decreaseCounter: () => dispatch(decrement()),
  };
}

const CounterPage = ({ counter, increaseCounter, decreaseCounter }) => {
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


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterPage);
