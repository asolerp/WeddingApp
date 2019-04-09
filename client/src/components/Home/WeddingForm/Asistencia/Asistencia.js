import React from "react";
import { connect } from "react-redux";

import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

import { updateParticipation } from "../../../actions/weddingFormActions";
import { AsistenciaStyleComponent } from "./AsistenciaStyle";

import foto1 from "../../../../images/family.jpg";

import { withStyles } from "@material-ui/core/styles";
import Div100vh from "react-div-100vh";

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
  props.updateParticipation(name, { ...props.user }, event.target.checked);
};

const Asistencia = ({ ...props }) => {
  const {classes} = props
  return (
    <Div100vh>
      <AsistenciaStyleComponent img={foto1}>
        <Div100vh
          className="image"
          style={{ height: "40rvh", width: "100vw" }}
        />
        <div className="header">
          <p className="title">Asistencia</p>
          <p className="subtitle">{props.lenguage.Asistencia.mainText}</p>
        </div>
        <div className="attendance">
          {props.user.participants.map(participant => (
            <FormControlLabel
              key={participant._id}
              control={
                <Switch
                  checked={participant.atendance}
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
          ))}
        </div>
      </AsistenciaStyleComponent>
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

export default withStyles(styles, { withTheme: true })(
  connect(
    mapStateToProps,
    { updateParticipation }
  )(Asistencia)
);
