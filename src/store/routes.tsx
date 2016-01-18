import * as React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from '../containers/App';
import AboutPage from '../containers/AboutPage';
import CounterPage from '../containers/CounterPage';


export default (
  <Route path="/" component={ App }>
    <IndexRoute component={ CounterPage }/>
    <Route path="about" component={ AboutPage }/>
  </Route>
);
