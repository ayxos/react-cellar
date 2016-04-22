import { assert } from 'chai';
import { shallow, render } from 'enzyme';
import * as sinon from 'sinon';

import * as React from 'react';
import Navigator from './index';


describe('Navigator Component', () => {

  it('should create a navigator', () => {

   const wrapper = shallow(<Navigator />);
   const navigator = wrapper.find('nav');

   assert.isOk(navigator.length, 'Navigator not created');
  
  });

  it('should create a navigator with the default classes', () => {

   const wrapper = shallow(<Navigator />);
   const navigator = wrapper.find('nav');
   assert.isTrue(navigator.hasClass('flex'));
   assert.isTrue(navigator.hasClass('items-center'));
   assert.isTrue(navigator.hasClass('p1'));
   assert.isTrue(navigator.hasClass('bg-white'));
   assert.isTrue(navigator.hasClass('border-bottom'));
  
  });

  it('should render a navigator with children correctly rendered', 
   () => {

   const wrapper = render(<Navigator>Hello World</Navigator>);
   const navigator = wrapper.find('nav');
    assert.strictEqual(navigator.text(), 'Hello World', 
     'child contents not found');
  });

});
