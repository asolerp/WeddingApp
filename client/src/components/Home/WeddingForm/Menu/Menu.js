import React from "react";
import { connect } from "react-redux";

import { MenuStyleComponent } from "./MenuStyle";

import foto1 from "../../../../images/menu.jpg";
import MainDish from "./MainDish";
import DishOptions from "./DishOptions";
import ModalDish from "./ModalDish";
import Div100vh from "react-div-100vh";

const Menu = props => {
  return (
    <Div100vh style={{ marginBottom: "15%" }}>
      <MenuStyleComponent img={foto1}>
        <Div100vh
          className="image"
          style={{ height: "40rvh", width: "100vw" }}
        />
        <div className="header">
          <p className="title">Menu</p>
          <p className="subtitle">{props.lenguage.Menu.mainText}</p>
        </div>

        <div className="attendance">
          <MainDish />
          <p style={{   marginTop: "10%", fontSize: "32px" }}>{props.lenguage.Menu.question}</p>
          <DishOptions {...props} />
          <ModalDish />
        </div>
      </MenuStyleComponent>
    </Div100vh>
  );
};

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
)(Menu);
