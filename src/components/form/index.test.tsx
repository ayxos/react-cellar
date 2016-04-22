import { assert } from 'chai';
import { shallow, render } from 'enzyme';
import * as sinon from 'sinon';

import * as React from 'react';
import Form from './index';

describe('Form Component', () => {

  it('should render a form with its children', () => {

    const onSubmit = sinon.spy();
    const wrapper = render(<Form handleSubmit={onSubmit}>Hello World</Form>);
    const form = wrapper.find('form');

    assert.isOk(form.length, 'Form not created');
    assert.strictEqual(form.text(), 'Hello World', 
      'Children not correctly rendered');

  });

  it('should respond to submit events', () => {
    const onSubmit = sinon.spy();
    const eventStub = { preventDefault: () => {} };
    const wrapper = shallow(<Form handleSubmit={onSubmit} />);
    const form = wrapper.find('form');

    form.simulate('submit', eventStub);
    assert.isTrue(onSubmit.calledOnce);
  });

});
