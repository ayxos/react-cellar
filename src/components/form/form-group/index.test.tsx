import { assert } from 'chai';
import { shallow, render } from 'enzyme';
import * as sinon from 'sinon';

import * as React from 'react';
import FormGroup from './index';

describe('Form Group Component', () => {

  it('should create a form group with its children and correct class', () => {
    const formGroup = shallow(<FormGroup>Hello World</FormGroup>);

    assert.isOk(formGroup.length, 'Form Group not created');
    assert.strictEqual(formGroup.text(), 'Hello World', 
      'Children not correctly rendered');
    assert.isTrue(formGroup.hasClass('py2'));

  });


});
