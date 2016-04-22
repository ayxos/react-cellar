import { assert } from 'chai';
import { shallow, render } from 'enzyme';
import * as sinon from 'sinon';

import * as React from 'react';
import Alert from './index';


describe('Alert Component', () => {

  it('should create an alert with the default classes', () => {

    const alert = shallow(<Alert>Loading...</Alert>);

    assert.isDefined(alert, 'alert exists');
    assert(alert.text() === 'Loading...');   
    assert.isTrue(alert.hasClass('p2'));
    assert.isTrue(alert.hasClass('bg-blue white'));
    assert.isTrue(alert.hasClass('hide'));
    assert.isFalse(alert.hasClass('block'));

  });

  it('should create an alert with the correct class for the isVisible value',
   () => {
   
    const alert = shallow(<Alert isVisible>Loading...</Alert>);

    assert.isFalse(alert.hasClass('hide'));
    assert.isTrue(alert.hasClass('block'));

  });

  it('should create an alert with the correct class for the given status value',
   () => {
   
    const alert = shallow(<Alert status={'error'}>Error</Alert>);

    assert.isTrue(alert.hasClass('bg-red white'));

  });

  it('should create an alert with the given id value', () => {
    const alert = shallow(<Alert id={'This id'}>Loading...</Alert>);
    
    assert.strictEqual(alert.prop('id'), 'This id',
      'status value is not set'); 
  });
});
