const objectAssign = require('object-assign');
import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import { browserHistory } from 'react-router';
import { syncHistory, routeReducer } from 'redux-simple-router';
const persistState = require('redux-localstorage');
const thunk = require('redux-thunk');
import promiseMiddleware from '../middleware/promiseMiddleware';
import logger from './logger';
import rootReducer from '../reducers';


declare var __DEV__: string;

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

const reducers = objectAssign({}, rootReducer, {
  routing: routeReducer,
});

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
      const nextReducers = objectAssign({}, rootReducer, {
        routing: routeReducer,
      });
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
