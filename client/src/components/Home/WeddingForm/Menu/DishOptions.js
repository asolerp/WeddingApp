import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";


import Icon from "@material-ui/core/Icon";
import { withStyles } from "@material-ui/core/styles";

import { connect } from "react-redux";
import { updateMenu } from "../../../actions/weddingFormActions";

const styles = {
  root: {
    color: "#8e8843",
    "&$checked": {
      color: "#8e8843"
    }
  },
  checked: {},
};

const handleChange = (name, props) => event => {
  props.updateMenu(name, { ...props.user }, event.target.value);
};

const DishOptions = props => {
  const { classes } = props;
  return (
    <div style={{ marginBottom: "4%" }}>
      {props.user.participants.map((participant, i) => {
        if (participant.atendance) {
          return (
            <React.Fragment key={i}>
              <p className="participant">
                <Icon className="icon">local_dining</Icon> {participant.name}{" "}
                <Icon className="icon">local_bar</Icon>
              </p>
              <RadioGroup
                aria-label="Menu"
                name="menu"
                value={participant.dish}
                onChange={handleChange(participant.name, props)}
                className="radioSection"
              >
                <FormControlLabel
                  value="Solomillo"
                  control={
                    <Radio
                      classes={{
                        root: classes.root,
                        checked: classes.checked,
                      }}
                    />
                  }
                  label={props.lenguage.Menu.mainMenu[0]}
                  labelPlacement="bottom"
                />
                <FormControlLabel
                  value="Carrilleras"
                  control={
                    <Radio
                      classes={{
                        root: classes.root,
                        checked: classes.checked,
                      }}
                    />
                  }
                  label={props.lenguage.Menu.mainMenu[1]}
                  labelPlacement="bottom"
                />
                <FormControlLabel
                  value="Lubina"
                  control={
                    <Radio
                      classes={{
                        root: classes.root,
                        checked: classes.checked,
                      }}
                    />
                  }
                  label={props.lenguage.Menu.mainMenu[2]}
                  labelPlacement="bottom"
                />
                <FormControlLabel
                  value="Seitan"
                  control={
                    <Radio
                      classes={{
                        root: classes.root,
                        checked: classes.checked,
                      }}
                    />
                  }
                  label={props.lenguage.Menu.mainMenu[3]}
                  labelPlacement="bottom"
                />
              </RadioGroup>
            </React.Fragment>
          );
        }
      })}
    </div>
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
    { updateMenu }
  )(DishOptions)
);
