import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './store/routes';
import configureStore from './store/configure-store';

// Global styles
import './styles/index.css';

const store = configureStore({});

ReactDOM.render(
  <div>
    <Provider store={ store }>
      <Router history={ browserHistory }>
        { routes }
      </Router>
    </Provider>
  </div>,
  document.getElementById('root')
);
