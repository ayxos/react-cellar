import { assert } from 'chai';
import { shallow, render } from 'enzyme';
import * as sinon from 'sinon';

import * as React from 'react';
import Content from './index';


describe('Content Component', () => {

  it('should create a <main> div', () => {

    const wrapper = shallow(<Content isVisible />);
    const main = wrapper.find('main');

    assert.isOk(main.length, 'main element was not created');
  
  });

  it('should create a <main> div with children rendered when isVisible',
    () => {

    const wrapper = render(<Content isVisible>Hello World</Content>);
    const main = wrapper.find('main');

    assert.isOk(main.children(), 'main element was not created');
    assert.strictEqual(main.text(), 'Hello World',
      'child content was not rendered');  
  });

  it('should create a <main> div without children rendered when not isVisible',
    () => {

    const wrapper = render(<Content isVisible={false}>Hello World
     </Content>);
    const main = wrapper.find('main');

    assert.notEqual(main.text(), 'Hello World',
      'child content was rendered');  
    assert.strictEqual(main.text(), '',
      'child content did not default');  
  });

});
