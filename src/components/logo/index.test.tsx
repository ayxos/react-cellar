import { assert } from 'chai';
import { shallow, render } from 'enzyme';
import * as sinon from 'sinon';

import * as React from 'react';
import Logo from './index';


describe('Logo Component', () => {

  it('should create a logo', () => {

   const logo = shallow(<Logo />);
   assert.isOk(logo.length, 'Logo not created');
  
  });

  it('should create a logo with an image and default class and style', () => {

   const wrapper = render(<Logo />);
   const logo = wrapper.children();
   const img = logo.find('img');

   assert.isTrue(logo.hasClass('flex items-center'));
   assert.isOk(img.length, 'Logo does not include an image');
   assert.include(img.prop('style'), { 'width': '128px' }, 
     'style includes default width');
   assert.strictEqual(img.prop('alt'), 'Rangle.io', 'alt tag is missing');
  
  });

});
