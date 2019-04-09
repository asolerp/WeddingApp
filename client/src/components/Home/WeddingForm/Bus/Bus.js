import React from "react";
import { connect } from "react-redux";

import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

import { updateBus } from "../../../actions/weddingFormActions";
import { BusStyleComponent } from "./BusStyle";

import { withStyles } from "@material-ui/core/styles";
import Div100vh from "react-div-100vh";

import foto1 from "../../../../images/bus.jpg";

const styles = theme => ({
  colorSwitchBase: {
    "&$colorChecked": {
      color: "#8e8843",
      "& + $colorBar": {
        backgroundColor: "#8e8843"
      }
    }
  },
  colorBar: {},
  colorChecked: {}
});

const handleChange = (name, props) => event => {
  props.updateBus(name, { ...props.user }, event.target.checked);
};

const Bus = props => {
  const {classes} = props
  return (
    <Div100vh >
      <BusStyleComponent img={foto1}>
        <Div100vh
          className="image"
          style={{ height: "40rvh", width: "100vw" }}
        />
        <div className="header">
          <p className="title">Bus</p>
          <p className="subtitle">{props.lenguage.Bus.mainText}</p>
          <p className="subtitle">{props.lenguage.Bus.question}</p>
        </div>
        <div className="attendance" >
          <FormGroup>
            {props.user.participants.map(participant => {
              return (
                participant.atendance && (
                  <FormControlLabel
                    key={participant._id}
                    control={
                      <Switch
                        checked={participant.bus}
                        onChange={handleChange(participant.name, props)}
                        value={participant.name}
                        classes={{
                          switchBase: classes.colorSwitchBase,
                          checked: classes.colorChecked,
                          bar: classes.colorBar
                        }}
                      />
                    }
                    label={participant.name}
                  />
                )
              );
            })}
          </FormGroup>
        </div>
      </BusStyleComponent>
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

export default withStyles(styles, { withTheme: true })(connect(
  mapStateToProps,
  { updateBus }
)(Bus));
