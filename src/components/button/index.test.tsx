import { assert } from 'chai';
import { shallow, render } from 'enzyme';
import * as sinon from 'sinon';

import * as React from 'react';
import Button from './index';


describe('Button Component', () => {
  it('should create a button with a default type and classes', () => {
    const wrapper = shallow(<Button>OK</Button>);
    const button = wrapper.find('button');

    assert.strictEqual(button.length, 1,
      'button not found');
    assert.strictEqual(button.text(), 'OK',
      'child contents not found');
    assert.strictEqual(button.prop('type'), 'button',
      'default type is not "button"');
    assert.isTrue(button.hasClass('btn-primary'));
  });

  it('should allow for a custom css class in addition to the default', () => {
    const wrapper = render(
      <Button className="bg-green">OK</Button>
    );
    const button = wrapper.find('button');
    assert.isTrue(button.hasClass('bg-green'));
    assert.isTrue(button.hasClass('btn-primary'));
  });

  it('should create a submit button', () => {
    const wrapper = shallow(<Button type="submit">Submit</Button>);
    const button = wrapper.find('button');

    assert.strictEqual(button.prop('type'), 'submit');
  });

  it('should respond to click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(
      <Button onClick={onButtonClick} />
    );
    wrapper.simulate('click');
    assert.isTrue(onButtonClick.calledOnce);
  });

});
