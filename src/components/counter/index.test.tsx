import { assert } from 'chai';
import { shallow, render } from 'enzyme';
import * as sinon from 'sinon';

import * as React from 'react';
import Counter from './index';


describe('Counter Component', () => {

   const onIncrement = sinon.spy();
   const onDecrement = sinon.spy();

  it('should create a counter', () => {

    const counter = shallow(<Counter counter={5} 
     increment={onIncrement} decrement= {onDecrement} />);

    assert.isOk(counter.length, 'Counter not created');
  
  });

  it('should create a counter with the correct default class', () => {

    const counter = shallow(<Counter counter={5} 
     increment={onIncrement} decrement= {onDecrement} />);

    assert.isTrue(counter.hasClass('flex'));
  
  });

  it('should create a counter with increment and decrement buttons', () => {

    const counter = render(<Counter counter={5} 
     increment={onIncrement} decrement= {onDecrement} />);

    const incrementButton = counter.find('#qa-increment-button');
    const decrementButton = counter.find('#qa-decrement-button');

    assert.isOk(incrementButton.length, 'Increment button does not exist');
    assert.isOk(decrementButton.length, 'Decrement does not exist'); 

  });

  it('should create a counter with the given starting counter value', () => {

    const counter = render(<Counter counter={5} 
    increment={onIncrement} decrement= {onDecrement} />);

    const counterDiv = counter.find('#qa-counter-div');

    assert.isOk(counterDiv.length, 'Counter div does not exist'); 
    assert.strictEqual(counterDiv.text(), '5',
      'Counter div has incorrect counter value');  

  });

  it('should have buttons that call the correct function on click events',
    () => {

    const counter = shallow(<Counter counter={5} 
     increment={onIncrement} decrement= {onDecrement} />);
    const incrementButton = counter.find('#qa-increment-button');
    const decrementButton = counter.find('#qa-decrement-button');
    incrementButton.simulate('click');
    assert.isTrue(onIncrement.calledOnce);
    decrementButton.simulate('click');
    assert.isTrue(onDecrement.calledOnce);
  });

});
