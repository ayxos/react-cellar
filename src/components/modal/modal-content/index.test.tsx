import { assert } from 'chai';
import { shallow, render } from 'enzyme';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import ModalContent from './index';


describe('Modal Content Component', () => {

  it('should create modal content with default classes', () => {
    const modalContent = shallow(<ModalContent>Hello World</ModalContent>);

    assert.isOk(modalContent.length, 'Modal content not created');
    assert.strictEqual(modalContent.text(), 'Hello World', 
      'Children not correctly rendered');
    assert.isTrue(modalContent.hasClass('p2 z2 bg-white relative'));
    
  });



});
