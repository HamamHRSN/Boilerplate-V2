import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage.js';
import LoginPage from '../components/LoginPage.js';
import NotFoundPage from '../components/NotFoundPage.js';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
      <div>
        <Switch>
          <PublicRoute path="/" component={LoginPage} exact={true} />
          <PrivateRoute path="/dashboard" component={DashboardPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );

export default AppRouter;
