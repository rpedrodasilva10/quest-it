import React from 'react';
import { Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import CustomRoute from './CustomRoute';

const AppRoutes: React.FC = () => (
  <Switch>
    <CustomRoute path="/" exact component={Login} />
    <CustomRoute path="/dashboard" component={Dashboard} isPrivate />
  </Switch>
);

export default AppRoutes;
