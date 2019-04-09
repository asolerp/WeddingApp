import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const LoginRequiredRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      rest.authenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const mapStateToProps = ({ authReducer }) => {
  const { authenticated } = authReducer;
  return { authenticated };
};

export default connect(mapStateToProps)(LoginRequiredRoute);
