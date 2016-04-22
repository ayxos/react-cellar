import { assert } from 'chai';
import { shallow, render } from 'enzyme';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Modal from './index';


describe('Modal Component', () => {

  it('should create a modal that is hidden by default', () => {
    const wrapper = render(<Modal>Hello World</Modal>);
    const modal = wrapper.children();

    assert.isOk(modal.length, 'Modal not created');
    assert.strictEqual(modal.text(), 'Hello World', 
      'Children not correctly rendered');
    assert.strictEqual(modal.prop('style').visibility, 'hidden', 
      'Incorrect visibility style set');
    assert.strictEqual(modal.prop('style').opacity, '0', 
      'Incorrect opacity style set');
  });

  it('should create a modal that is visibile', () => {
    const wrapper = render(<Modal isVisible>Hello World</Modal>);
    const modal = wrapper.children();
    
    assert.strictEqual(modal.prop('style').visibility, 'visible', 
      'Incorrect visibility style set');
    assert.strictEqual(modal.prop('style').opacity, '1', 
      'Incorrect opacity style set');
  });


});
