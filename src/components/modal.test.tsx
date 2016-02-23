import * as assert from 'assert';
import * as jsdom from 'jsdom';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Modal from './modal';

declare var global: {
  document: Document,
  window: Window
};

describe('Modal Component', () => {
  beforeEach(() => {
    global.document = jsdom.jsdom(undefined);
    global.window = document.defaultView;
  });

  it('should create a modal', () => {
    const props = {
      children: 'hello world',
    };

    const node = document.createElement('div');
    const modal: Element = ReactDOM.findDOMNode(
      ReactDOM.render(<div><Modal { ...props } /></div>, node));

    assert(modal.childNodes[0].textContent === 'hello world');
  });
});
