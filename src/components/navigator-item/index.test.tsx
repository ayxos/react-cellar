import { assert } from 'chai';
import { shallow, render } from 'enzyme';
import * as sinon from 'sinon';

import * as React from 'react';
import NavigatorItem from './index';


describe('Navigator Item Component', () => {

  it('should create a navigator item', () => {

   const navigatorItem = shallow(<NavigatorItem />);
   assert.isOk(NavigatorItem.length, 'NavigatorItem not created');
   assert.isTrue(navigatorItem.hasClass('truncate'));
  
  });

  it('should create a navigator item with default props and classes', () => {

   const navigatorItem = shallow(<NavigatorItem />);
   assert.isFalse(navigatorItem.hasClass('hide'));
   assert.isFalse(navigatorItem.hasClass('mr2'));
   assert.isFalse(navigatorItem.hasClass('ml2'));

  });

  it('should create a navigator item with classes set correctly for props', 
   () => {

   const navigatorItem = shallow(<NavigatorItem isVisible={false} mr ml />);
   assert.isTrue(navigatorItem.hasClass('hide'));
   assert.isTrue(navigatorItem.hasClass('mr2'));
   assert.isTrue(navigatorItem.hasClass('ml2'));
        
  });

  it('should render navigator item with children set to null by default', 
   () => {

   const navigatorItem = render(<NavigatorItem />);
   assert.isNotOk(navigatorItem.text(), 
     'the navigator item does not have children');
        
  });

  it('should render a navigator item with children correctly rendered', 
   () => {

   const navigatorItem = render(<NavigatorItem>Hello World</NavigatorItem>);
   assert.strictEqual(navigatorItem.text(), 'Hello World',
    'child contents not found');
        
  });

});
