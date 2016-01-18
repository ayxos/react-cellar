import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import { reducer as formReducer } from 'redux-form';
import counter from './counter';
import session from './session';


const rootReducer = combineReducers({
  session,
  counter,
  routing: routeReducer,
  form: formReducer,
});


export default rootReducer;
