import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  userNameChanged,
  passwordChanged,
  loginUser
} from "../actions/authActions";
import img from "../../images/login.jpg";
import { LoginStyleComponent } from "./LoginStyle";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import font from "../../fonts/Gloss_And_Bloom.ttf"
import font2 from "../../fonts/Roboto-Light.ttf"

import div from "react-div-100vh";
import Div100vh from "react-div-100vh/lib/Div100vh";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  cssRoot: {
    backgroundColor: "white",
    color: "black",
    "&:hover": {
      border: "2px solid white",
      backgroundColor: "transparent",
      color: "white"
    }
  },
  margin: {
    margin: theme.spacing.unit
  },
  cssLabel: {
    "&$cssFocused": {
      color: "white"
    }
  },
  cssFocused: {},
  cssUnderline: {
    "&:after": {
      borderBottomColor: "white"
    }
  },
  cssOutlinedInput: {
    "& $notchedOutline": {
      borderColor: "white"
    },
    backgroundColor: "#23232375",
    color: "white",
    "&$cssFocused $notchedOutline": {
      borderColor: "white"
    }
  },
  notchedOutline: {
    border: "1px solid white"
  }
});

class Login extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      lenguage: "sp",
      forms: [
        "M 200 200m -75 0a 75 75 0 1 0 150 0a 75 75 0 1 0 -150 0",
        "M 43.5703 34 C 115.977 -36.9719 237.588 40.7602 338.504 34 C 436.992 27.4024 584.269 -28.7116 623.167 20.0936 C 662.065 68.8988 600.451 177.68 602.012 281.32 C 603.64 389.403 654.491 511.401 602.012 586 C 532.926 586 158.625 587 31 586 C -29.2288 527.147 17.9491 394.039 22 296.215 C 26.729 182.016 -33.4904 109.534 43.5703 34 Z"
      ],
      height: 0
    };
  }

  componentDidMount() {
    if (this.props.authenticated) {
      const { from } = this.props.location.state || { from: { pathname: "/" } };
      return <Redirect to={from} />;
    }

    this.setState({ height: window.innerHeight });
  }

  handleLenguage = lenguage => {
    this.setState({ lenguage })
  }

  handleChange = name => event => {
    name === "username"
      ? this.props.userNameChanged(event.target.value)
      : this.props.passwordChanged(event.target.value);
  };

  _isLoggedIn = () => {
    this.props.authenticated && this.props.history.push("/");
  };

  _loginUser = () => {
    const { username, password, history } = this.props;
    const { lenguage } = this.state;
    this.props.loginUser({ username, password, history, lenguage });
  };

  _renderLenguage = () => {
    return (
      <div className="lenguages">
        <p onClick={() => this.handleLenguage("sp")} style={this.state.lenguage === "sp" ? { textDecoration: "underline" } : { textDecoration: "none" }}>ESPAÑOL</p>
        <p onClick={() => this.handleLenguage("en")} style={this.state.lenguage === "en" ? { textDecoration: "underline" } : { textDecoration: "none" }}>ENGLISH</p>
      </div>
    )
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <LoginStyleComponent height={this.state.height} img={img} font={font} font2={font2}>
          <div className="doMobile">
            <p>Para una mejor experiencia</p>
            <p>Ver en vertical en tu movil :)</p>
          </div>
          <div
            className="form"
            noValidate
            autoComplete="off"
            style={{height: "100rvh"}}
          >
            <h1>Carol & Alberto</h1>
            <div className="formContainer">

              <TextField
                id="outlined-name"
                label="Name"
                onChange={this.handleChange("username")}
                margin="normal"
                variant="outlined"
                autoComplete='off'
                ref="username"
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused
                  }
                }}
                InputProps={{
                  classes: {
                    root: classes.cssOutlinedInput,
                    focused: classes.cssFocused,
                    notchedOutline: classes.notchedOutline
                  }
                }}
              />
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                name="password"
                autoComplete='off'
                onChange={this.handleChange("password")}
                autoComplete="password"
                margin="normal"
                variant="outlined"
                ref="password"
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused
                  }
                }}
                InputProps={{
                  classes: {
                    root: classes.cssOutlinedInput,
                    focused: classes.cssFocused,
                    notchedOutline: classes.notchedOutline
                  }
                }}
              />
              <p style={{ color: "white" }}>{this.props.error}</p>

              <Button
                size="medium"
                onClick={this._loginUser}
                className={classNames(classes.cssRoot)}
              >
                Login
              </Button>
            </div>
            </div>
        </LoginStyleComponent>
      </div>
    );
  }
}

const mapStateToProps = ({ authReducer, ownProps }) => {
  const { username, user, password, error, authenticated } = authReducer;

  return {
    user,
    username,
    password,
    error,
    authenticated
  };
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    { userNameChanged, passwordChanged, loginUser }
  )(Login)
);
