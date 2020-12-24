import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Login, SignUp } from '../pages';
import PrivateRoute from './PrivateRoutes';

const Routes = () => (
  <Switch>
    <Route exact path='/chain' component={Login} />
    <PrivateRoute path='/home' component={() => <h1>Welcome the Chain</h1>} /> 
    <Route path='/signup' component={SignUp} />
  </Switch>
);

export default Routes;
