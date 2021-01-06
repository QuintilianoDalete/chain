import React from "react";
import { Switch, Route } from "react-router-dom";
import { Login, SignUp, Home, Tasks, Donation, Contacts } from "../pages";
import PrivateRoute from "./PrivateRoute";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/chain" component={Login} />
      <Route path="/signup" component={SignUp} />
      <PrivateRoute isPrivate path="/home" component={Home} />
      <PrivateRoute isPrivate path="/newProject" component={Tasks} />
      <PrivateRoute isPrivate path="/donation" component={Donation} />
      <PrivateRoute isPrivate path="/contacts" component={Contacts} />
      <Route render={() => <h1>NOT FOUND</h1>} />
    </Switch>
  );
}
