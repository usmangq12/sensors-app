import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import Home from './components/Home/Home';

export const Routing = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />

        <Route exact path="/login" component={Login} />

        <Route exact path="/sign-up" component={SignUp} />

        <Route exact path="/home" component={Home} />

        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default Routing;
