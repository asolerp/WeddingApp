import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "./components/actions";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import WeddingForm from "./components/Home/WeddingForm/WeddingForm";
import ResumenBoda from "./components/ResumenBoda/ResumenBoda";
import Info from "./components/Home/Info/Info";

class App extends Component {
  render() {
    return (     
      <div className="container">
        <Router>
          <Route exact path="/login" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/wedding" component={WeddingForm} />
          <Route exact path="/info" component={Info} />
          <Route exact path="/resumenboda" component={ResumenBoda} />
        </Router>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
