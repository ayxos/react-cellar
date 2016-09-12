import * as React from 'react';
const { IndexRoute, Route } = require('react-router');

import App from '../containers/app';
import AboutPage from '../containers/about-page';
import CounterPage from '../containers/counter-page';
import CreatePage from '../containers/create-page';
import ListPage from '../containers/list-page';
import InitPage from '../containers/init-page';
import WinePage from '../containers/wine-page';

export default (
  <Route path="/" component={ App }>
    <IndexRoute component={ InitPage }/>
    <Route path="about" component={ AboutPage }/>
    <Route path="create" component={ CreatePage }/>
    <Route path="list" component={ ListPage }/>
    <Route path="/wine/:wineId" component={ WinePage }/>
  </Route>
);
