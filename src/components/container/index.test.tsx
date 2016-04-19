import { assert } from 'chai';
import { shallow, render } from 'enzyme';
import * as sinon from 'sinon';

import * as React from 'react';
import Container from './index';


describe('Container Component', () => {

  it('should create a container', () => {
    const container = shallow( <Container size = { 1 }
        center>Hello World</Container> );

    assert.isOk(container.length, 'container not created');
    assert.strictEqual(container.text(), 'Hello World', 
       'Child contents not found');
  });

  it('should create a container with the correct class for the given size',
    () => {
    const container = shallow( <Container size = { 4 }
        center /> );

    assert.isTrue(container.hasClass('max-width-4'));
    assert.isFalse(container.hasClass('max-width-1'));
  });

  it('should create a container withthe mx-auto class when center is true',
    () => {
    const container = shallow( <Container size = { 1 }
        center /> );

    assert.isTrue(container.hasClass('mx-auto'));
  });

  it('should create a container without the mx-auto class when center is false',
  () => {
    const container = shallow( <Container size = { 1 }
        center = { false } />);

    assert.isFalse(container.hasClass('mx-auto'));
  });

});
