import { assert } from 'chai';
import { shallow, render } from 'enzyme';
import * as sinon from 'sinon';

import * as React from 'react';
import FormLabel from './index';

describe('Form label Component', () => {

  it('should render a form label with its children and default id', () => {
    const formLabel = shallow(<FormLabel>Hello World</FormLabel>);

    assert.isOk(formLabel.length, 'FormLabel not created');
    assert.strictEqual(formLabel.text(), 'Hello World', 
      'Children not correctly rendered');
    assert.strictEqual(formLabel.prop('id'), '', 
     'Default id value is incorrect');

  });

  it('should render a form label with given id', () => {

    const formLabel = shallow(<FormLabel id={'form-id'}/>);

    assert.strictEqual(formLabel.prop('id'), 'form-id', 
     'Id value is not correctly set');

  });

});
