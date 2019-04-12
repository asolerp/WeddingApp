import React, { Component } from "react";
import { connect } from "react-redux";
import { HomeStyleComponent } from "./HomeStyle";
import { Link } from "react-router-dom";
import Icon from "@material-ui/core/Icon";
import imagenHome from "../../images/home.jpg";
import olivo from "../../images/olivo1.png";
import Div100vh from "react-div-100vh";
import FormAnimated from "../AnimatedForm/AnimatedForm";
import spanishText from "../../textContent/spanish.json"

const innerHeight = require("ios-inner-height");

class Home extends Component {
  constructor() {
    super();
    this.state = {
      form: [
        "M 153.6 -239 C 199.1 -209.8 236 -167.2 258.4 -118 C 280.9 -68.9 288.9 -13.1 281.2 40.4 C 273.5 93.9 250.1 145.2 214.7 186.1 C 179.3 226.9 131.9 257.4 80 272.6 C 28.2 287.8 -28.2 287.8 -80 272.6 C -131.9 257.4 -179.3 226.9 -214.7 186.1 C -250.1 145.2 -273.5 93.9 -281.2 40.4 C -288.9 -13.1 -280.9 -68.9 -258.4 -118 C -236 -167.2 -199.1 -209.8 -153.6 -239 C -108.1 -268.3 -54.1 -284.1 0 -284.1 C 54.1 -284.1 108.1 -268.3 153.6 -239 Z",
        "M 70.7 -66.3 C 117.4 -63.3 199 -77.2 223.5 -59.1 C 247.9 -41 215.3 9.2 193.9 59.3 C 172.5 109.4 162.4 159.5 131.9 177.2 C 101.5 195 50.7 180.5 18.3 155.3 C -14.1 130.1 -28.2 94.2 -70.7 80.3 C -113.2 66.4 -184 74.6 -211.8 53.6 C -239.7 32.5 -224.4 -17.7 -198.4 -54.2 C -172.4 -90.6 -135.6 -113.3 -100.7 -120.1 C -65.8 -126.9 -32.9 -118 -10.5 -103.5 C 12 -89.1 23.9 -69.2 70.7 -66.3 Z"
      ]
    };
  }

  componentDidMount() {}

  render() {
    console.log(this.props);
    return (
      <Div100vh style={{ height: "100rvh" }}>
        <FormAnimated
          iniY={0}
          endY={0}
          time={2800}
          color={"white"}
          absolute={false}
          className={"form1"}
          form={this.state.form[0]}
        />
        <HomeStyleComponent img={imagenHome}>
          <Div100vh className="imageSection" style={{ height: "50rvh" }}>
            {/* <img className="imagenHome" src={imagenHome} alt="boda" /> */}
          </Div100vh>

          <Div100vh className="infoSection" style={{ height: "50rvh" }}>
            <img className="imagenOlivo" src={olivo} alt="boda" />
            <div>
              <Div100vh
                className="welcomeMessage"
                style={{ height: "48.5rvh" }}
              >
              <p>{`${spanishText.MainPage.salute} ${this.props.user.username}`}</p>
              <p>{spanishText.MainPage.mainText}</p>
              </Div100vh>

              <Div100vh className="iconSection" style={{ height: "11.5rvh" }}>
                <div className="iconContainer">
                  <Icon className="icon">mapa</Icon>
                  <span className="iconLabel">Dirección</span>
                </div>
                <div className="iconContainer">
                  <Icon className="icon">info</Icon>
                  <span className="iconLabel">Información</span>
                </div>
                <div className="iconContainer">
                  <Link to="/wedding" style={{ textDecoration: "none" }}>
                    <Icon className="icon">assignment</Icon>
                    <span className="iconLabel">Formulario</span>
                  </Link>
                </div>
              </Div100vh>
            </div>
          </Div100vh>
        </HomeStyleComponent>
      </Div100vh>
    );
  }
}

const mapStateToProps = ({ authReducer }) => {
  const { user, lenguage } = authReducer;

  return {
    user,
    lenguage
  };
};

export default connect(
  mapStateToProps,
  {}
)(Home);
