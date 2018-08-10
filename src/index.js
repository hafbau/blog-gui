import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
import store from './state_manager/store';

import 'assets/css/material-dashboard-react.css?v=1.2.0';

import indexRoutes from 'routes';
import UserLayout from 'common/containers/UserLayout';

const history = createBrowserHistory();
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route
        render={({ location }) => (
          <UserLayout location={location} />

        )}
      />
    </Router>
  </Provider>,
    document.getElementById('root')
  );
