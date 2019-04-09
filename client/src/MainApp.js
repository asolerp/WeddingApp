import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import LoginRequiredRoute from "./components/utils/LoginRequireRoute";

import Login from "./components/Login/Login";
import App from "./App";
import Home from "./components/Home/Home";
import ResumenBoda from "./components/ResumenBoda/ResumenBoda";

class MainApp extends Component {
  render() {
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route exact path="/resumenboda" component={ResumenBoda} />
        <LoginRequiredRoute component={App} />
      </Switch>
    );
  }
}

const mapStateToProps = ({ authReducer, ownProps }) => {
  const { authenticated } = authReducer;

  return { authenticated };
};

export default connect(
  mapStateToProps,
  {}
)(MainApp);
