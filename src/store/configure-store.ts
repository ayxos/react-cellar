import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import { browserHistory } from 'react-router';
import { syncHistory } from 'react-router-redux';
const persistState = require('redux-localstorage');
const thunk = require('redux-thunk').default;
import promiseMiddleware from '../middleware/promise-middleware';
import logger from './logger';
import rootReducer from '../reducers';

// webpack-hot-loader sets some extra attributes on node's `module` if that
// module has been hot-loaded in the browser.
interface HotNodeModule extends NodeModule {
 hot: { accept: Function };
};

// This global is used to turn on redux dev tools when in dev mode.
declare let __DEV__: boolean;
declare let module: HotNodeModule;

const reduxRouterMiddleware = syncHistory(browserHistory);

const storageConfig = {
  key: 'typescript-react-redux-seed',
  serialize: (store) => {
    return store && store.session ?
      JSON.stringify(store.session.toJS()) : store;
  },
  deserialize: (state) => ({
    session: state ? fromJS(JSON.parse(state)) : fromJS({}),
  }),
};

function configureStore(initialState) {
  const store = compose(
  __DEV__
  ? applyMiddleware(reduxRouterMiddleware, promiseMiddleware, thunk, logger)
  : applyMiddleware(reduxRouterMiddleware, promiseMiddleware, thunk),
    persistState('session', storageConfig)
  )(createStore)(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  // Required for replaying actions from devtools to work
  if (__DEV__) {
    reduxRouterMiddleware.listenForReplays(store);
  }

  return store;
}


export default configureStore;
