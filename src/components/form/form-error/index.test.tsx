import { assert } from 'chai';
import { shallow, render } from 'enzyme';
import * as sinon from 'sinon';

import * as React from 'react';
import FormError from './index';

describe('Form Error Component', () => {

  it('should create a form error with its children, default classes and id', 
   () => {
    const formError = shallow(<FormError isVisible>Hello World</FormError>);

    assert.isOk(formError.length, 'Form Group not created');
    assert.strictEqual(formError.text(), 'Hello World', 
      'Children not correctly rendered');
    assert.strictEqual(formError.prop('id'), '', 
      'Default id value is incorrect');
    assert.isTrue(formError.hasClass('bold black'));
    assert.isFalse(formError.hasClass('hide'));

  });

  it('should create a hidden form error when isVisible is false', 
   () => {
    const formError = shallow(<FormError isVisible={false} />);

    assert.isTrue(formError.hasClass('hide'));

  });

  it('should create a form error with the given id', 
   () => {
    const formError = shallow(<FormError isVisible id={'form-error-id'} />);

    assert.strictEqual(formError.prop('id'), 'form-error-id', 
     'Id value is not set correctly');

  });


});
