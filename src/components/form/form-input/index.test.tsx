import { assert } from 'chai';
import { shallow, render } from 'enzyme';
import * as sinon from 'sinon';

import * as React from 'react';
import Input from './index';

describe('Input Component', () => {

  it('should create an input with default class, type and placeholder', () => {

    const username = {};
    const wrapper = shallow(<Input fieldDefinition={username} />);
    const input = wrapper.find('input');

    assert.isOk(input.length, 'Input not created');
    assert.isTrue(input.hasClass('block col-12 mb1 input'));
    assert.strictEqual(input.prop('placeholder'), '',
     'Input does not have the default placeholder');
    assert.strictEqual(input.prop('type'), 'text', 
      'Input does not have the default type');  
    assert.strictEqual(input.prop('id'), '', 
     'Input does not have the default id');  
  });

  it('should create an input with a custom id, type and placeholder', () => {

    const username = {};
    const wrapper = shallow(<Input fieldDefinition={username} id={'id-1'} 
     type={'password'} placeholder={'hello world'} />);
    const input = wrapper.find('input');
 
    assert.strictEqual(input.prop('id'), 'id-1', 
     'Input does not have the default id');  
    assert.strictEqual(input.prop('type'), 'password', 
      'Input does not have the default type'); 
    assert.strictEqual(input.prop('placeholder'), 'hello world',
     'Input does not have the default placeholder');

  });

});
