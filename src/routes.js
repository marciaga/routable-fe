import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import * as Pages from './pages';

export const Routes = ({ children }) => (
  <Router>
    {children}
    <div>
      <Switch>
        <Route path="/prioritizer">
          <Pages.Prioritizer />
        </Route>
        <Route path="/">
          <Pages.Home />
        </Route>
      </Switch>
    </div>
  </Router>
);
