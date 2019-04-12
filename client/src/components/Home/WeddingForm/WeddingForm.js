import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  updateParticipation,
  updateIndexFormPage,
  addIndex
} from "../../actions/weddingFormActions";

import { withStyles } from "@material-ui/core/styles";

import Asistencia from "./Asistencia/Asistencia";
import Bus from "./Bus/Bus";
import Menu from "./Menu/Menu";
import Resumen from "./Resumen/Resumen";

import { WeddingFormStyleComponent } from "./WeddingFormStyle";

import Fade from "@material-ui/core/Fade";
import CircularProgress from "@material-ui/core/CircularProgress";

import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";

import MobileStepper from "@material-ui/core/MobileStepper";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import AuthService from "../../api/authBack";

import Div100vh from "react-div-100vh";
import { element } from "prop-types";

const styles = {
  root: {
    backgroundColor: "#858f7f",
    position: "fixed",
    bottom: 0,
    width: "100vw",
    boxSizing: "border-box",
    color: "white"
  },
  dotActive: {
    backgroundColor: "white"
  },
  bottom: {
    color: "white"
  }
};

const innerHeight = require("ios-inner-height");

class WeddingForm extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      index: 0,
      loading: true,
      display: false,
      carousel: false,
      height: 0,
      scroll: false
    };
    this.service = new AuthService();
    this.targetElement = null;
  }

  componentDidMount() {
    // this.targetElement = document.querySelector(".weddingContainer");
    // this.showTargetElement();
    this.displayLoading();
  }

  displayLoading = () => {
    setTimeout(() => {
      this.setState({ ...this.state, display: true }, () =>
        this.displayCarousel()
      );
    }, 400);
  };

  displayCarousel = () => {
    setTimeout(() => {
      this.setState({
        ...this.state,
        carousel: true,
        display: false,
        loading: false,
        height: window.innerHeight
      });
    }, 2500);
  };

  _renderLoading = () => {
    const { loading, display } = this.state;

    return (
      <Div100vh className="loading" style={{ height: "100rvh" }}>
        <p>{this.props.lenguage.Form.loading}</p>
        <Fade
          in={loading}
          style={{
            transitionDelay: loading ? "800ms" : "0ms"
          }}
          unmountOnExit
        >
          <CircularProgress style={{ color: "white" }} />
        </Fade>
      </Div100vh>
    );
  };

  _renderCarousel = () => {
    return (
      <Carousel
        showThumbs={false}
        showArrows={false}
        swipeable={false}
        showStatus={false}
        showIndicators={false}
        selectedItem={this.state.index}
        style={{ backgroundColor: "white" }}
      >
        <div className="section">
          <Asistencia />
        </div>
        <div className="section">
          <Bus />
        </div>
        <div className="section">
          <Menu />
        </div>
        <div className="section">
          <Resumen />
        </div>
      </Carousel>
    );
  };

  // handleSelect = (index, props) => {
  //   props.updateIndexFormPage(index);
  // };

  nextSection = scroll => {
    window.scroll(0, 0);
    if (scroll === 2) {
      this.setState({
        ...this.state,
        index: this.state.index + 1,
        scroll: false
      });
    } else {
      this.setState({
        ...this.state,
        index: this.state.index + 1,
        scroll: true
      });
    }
  };

  backSection = scroll => {
    window.scroll(0, 0);
    if (scroll === 2) {
      this.setState({
        ...this.state,
        index: this.state.index - 1,
        scroll: true
      });
    } else {
      this.setState({
        ...this.state,
        index: this.state.index - 1,
        scroll: false
      });
    }
  };

  updateForm = () => {
    this.props.history.push("/home");
    this.service.updateForm(this.props.user);
  };

  isTrue = participant => {
    return participant.atendance === true;
  };


  manageFunctions = () => {
    if (this.props.user.participants.some(this.isTrue)) {
      this.state.index < 3
        ? this.nextSection(this.state.index)
        : this.updateForm();
    } else {
      return this.updateForm();
    }
  };

  manageTextButtonsRight = () => {
    if (this.props.user.participants.some(this.isTrue)) {
      switch (this.state.index) {
        case 0:
          return (
            <React.Fragment>
              <span>Bus</span>
              <Icon>keyboard_arrow_right</Icon>
            </React.Fragment>
          );
        case 1:
          return (
            <React.Fragment>
              <span>Menu</span>
              <Icon>keyboard_arrow_right</Icon>
            </React.Fragment>
          );
        case 2:
          return (
            <React.Fragment>
              <span>{this.props.lenguage.Form.buttons.resumen}</span>
              <Icon>keyboard_arrow_right</Icon>
            </React.Fragment>
          );
        case 3:
          return "Enviar";
      }
    } else {
      return "Enviar";
    }
  };

  manageTextButtonsLeft = () => {
    if (this.props.user.participants.some(this.isTrue)) {
      switch (this.state.index) {
        case 0:
          return (
            <React.Fragment>
              <span></span>
            </React.Fragment>
          );
        case 1:
          return (
            <React.Fragment>
              <Icon>keyboard_arrow_left</Icon>
              <span>{this.props.lenguage.Form.buttons.asistencia}</span>
            </React.Fragment>
          );
        case 2:
          return (
            <React.Fragment>
              <Icon>keyboard_arrow_left</Icon>
              <span>Bus</span>
            </React.Fragment>
          );
        case 3:
        return (
          <React.Fragment>
            <Icon>keyboard_arrow_left</Icon>
            <span>Menu</span>
          </React.Fragment>
        );
      }
    } 
  };

  render() {
    console.log(this.props.user.participants.some(this.isTrue));
    const { classes } = this.props;
    return (
      <div>
        <WeddingFormStyleComponent>
          {this.state.display && this._renderLoading()}
          <div className="weddingContainer">
            {this.state.carousel && (
              <div>
                {this._renderCarousel()}
                <MobileStepper
                  variant="dots"
                  steps={4}
                  position="static"
                  activeStep={this.state.index}
                  classes={{
                    root: classes.root, // class name, e.g. `classes-nesting-root-x`
                    dotActive: classes.dotActive, // class name, e.g. `classes-nesting-label-x`
                    positionBottom: classes.bottom
                  }}
                  nextButton={
                    <Button
                      size="small"
                      style={{ color: "white" , width: "30vw" }}
                      onClick={
                        () => this.manageFunctions()
                        // this.state.index < 3
                        //   ? this.nextSection(this.state.index)
                        //   : this.updateForm()
                      }
                      // disabled={this.state.index === 3}
                    >
                      {this.manageTextButtonsRight()}
                    </Button>
                  }
                  backButton={
                    <Button
                      size="small"
                      style={{ color: "white", width: "30vw" }}
                      onClick={() => this.backSection(this.state.index)}
                      disabled={this.state.index === 0}
                    >
                      {this.manageTextButtonsLeft()}
                    </Button>
                  }
                />
              </div>
            )}
          </div>
        </WeddingFormStyleComponent>
      </div>
    );
  }
}

const mapStateToProps = ({ authReducer, weddingFormReducer }) => {
  const { user, lenguage } = authReducer;
  const { index, direction } = weddingFormReducer;

  return {
    user,
    lenguage,
    index,
    direction
  };
};

export default withStyles(styles, { withTheme: true })(
  connect(
    mapStateToProps,
    { updateParticipation, updateIndexFormPage, addIndex }
  )(WeddingForm)
);
