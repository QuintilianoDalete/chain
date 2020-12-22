import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { Login } from './pages'
import 'semantic-ui-css/semantic.min.css';

const App = () => (
  <Switch>
    <Route path='/' component={Login} /> 
  </Switch>
);


export default App;
