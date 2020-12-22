import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { Login, SignUp } from './pages'
import 'semantic-ui-css/semantic.min.css';

const App = () => (
  <Switch>
    <Route exact path='/chain' component={Login} /> 
    <Route path='/signup' component={SignUp} /> 
  </Switch>
);

export default App;
