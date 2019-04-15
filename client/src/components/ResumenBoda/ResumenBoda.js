import React, { Component } from "react";
import { connect } from "react-redux";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import Icon from "@material-ui/core/Icon";
import Chip from "@material-ui/core/Chip";

import Chart from "chart.js";

import { ResumenBodaStyleComponent } from "./ResumenBodaStyle";

import foto1 from "../../images/resumen.jpg";

import { getAllUsers, getParticipants } from "../actions/authActions";
import { withStyles } from "@material-ui/core";

const _ = require("lodash");

const styles = theme => ({
  table: {
    minWidth: 700
  }
});

class ResumenBoda extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      menuChart: undefined,
      atendanceChart: undefined,
      busChart: undefined
    };
  }

  componentDidMount() {
    const ctx = document.getElementById("myChart");
    const ctx2 = document.getElementById("atendanceChart");
    const ctx3 = document.getElementById("busChart");

    this.props.getAllUsers();
    this.props.getParticipants().then(() => {
      let participants = [...this.props.participants];
      // console.log(participants)
      // console.log(_.groupBy(participants, "bus"));
      let countDishes = [];
      let countAtendance = [];
      let countBus = [];

      Object.keys(_.groupBy(participants, "dish")).forEach(dish =>
        countDishes.push(_.groupBy(participants, "dish")[dish].length)
      );

      countAtendance = [
        _.groupBy(participants, "atendance")["true"] !== undefined
          ? _.groupBy(participants, "atendance")["true"].length
          : 0,
        _.groupBy(participants, "atendance")["false"] !== undefined
          ? _.groupBy(participants, "atendance")["false"].length
          : 0
      ];

      countBus = [
        _.groupBy(participants, "bus")["true"] !== undefined
          ? _.groupBy(participants, "bus")["true"].length
          : 0,
        _.groupBy(participants, "bus")["false"] !== undefined
          ? _.groupBy(participants, "bus")["false"].length
          : 0
      ];

      let dataAtendance = {
        datasets: [
          {
            label: "Asistencia",
            data: countAtendance,
            backgroundColor: ["#4BC0C0", "#FF6384"]
          }
        ],
        labels: ["Si", "No"]
      };

      let dataBus = {
        datasets: [
          {
            label: "Bus",
            data: countBus,
            backgroundColor: ["#4BC0C0", "#FF6384"]
          }
        ],
        labels: ["Si", "No"]
      };

      let dataMenu = {
        datasets: [
          {
            data: countDishes,
            backgroundColor: ["#FF6384", "#4BC0C0", "#FFCE56", "#E7E9ED"]
          }
        ],
        labels: Object.keys(_.groupBy(participants, "dish"))
      };

      this.setState({
        ...this.state,
        atendanceChart: new Chart(ctx2, {
          data: dataAtendance,
          type: "doughnut"
        }),
        busChart: new Chart(ctx3, {
          data: dataBus,
          type: "doughnut"
        }),
        menuChart: new Chart(ctx, {
          data: dataMenu,
          type: "polarArea"
        })
      });
    });
  }

  _renderTag = dish => {
    switch (dish) {
      case "Solomillo":
        return (
          <Chip
            label={dish}
            style={{ background: "#FF6384", color: "white" }}
          />
        );
      case "Carrilleras":
        return (
          <Chip
            label={dish}
            style={{ background: "#4BC0C0", color: "white" }}
          />
        );
      case "Lubina":
        return (
          <Chip
            label={dish}
            style={{ background: "#FFCE56", color: "white" }}
          />
        );
      case "Seitan":
        return (
          <Chip
            label={dish}
            style={{ background: "#E7E9ED", color: "white" }}
          />
        );
      default:
        return (
          <Chip
            label="Sin Seleccionar"
            style={{ background: "#E7E9ED", color: "white" }}
          />
        );
    }
  };

  render() {
    const { classes } = this.props;
    console.log(this.props);

    return (
      <ResumenBodaStyleComponent>
        <img src={foto1} alt="familia" />
        <div className="header">
          <p className="title">Resumen</p>
        </div>
        <div className="chartsSection">
          <div className="chartContainer">
            <p>Asistencia</p>
            <canvas id="atendanceChart" />
          </div>
          <div className="chartContainer">
            <p>Bus</p>
            <canvas id="busChart" />
          </div>
          <div className="chartContainer">
            <p>Menu</p>
            <canvas id="myChart" />
          </div>
        </div>

        <div className="attendance">
          <Table style={{ width: "90vw" }} className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell align="left">Nombre</TableCell>
                <TableCell align="left">Apellido</TableCell>
                <TableCell align="center">Asistencia</TableCell>
                <TableCell align="center">Bus</TableCell>
                <TableCell align="center">Menu</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.participants !== undefined &&
                this.props.participants.map(participant => (
                  <TableRow key={participant.name}>
                    <TableCell component="th" scope="row">
                      {participant.name}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {participant.lastName}
                    </TableCell>
                    <TableCell align="center">
                      {participant.atendance ? (
                        <Icon style={{ color: "#4BC0C0" }}>check_circle</Icon>
                      ) : (
                        <Icon style={{ color: "#FF6384" }}>cancel</Icon>
                      )}
                    </TableCell>
                    <TableCell align="center">
                      {participant.bus ? (
                        <Icon style={{ color: "#4BC0C0" }}>check_circle</Icon>
                      ) : (
                        <Icon style={{ color: "#FF6384" }}>cancel</Icon>
                      )}
                    </TableCell>
                    <TableCell align="center">
                      {this._renderTag(participant.dish)}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
      </ResumenBodaStyleComponent>
    );
  }
}

const mapStateToProps = ({ authReducer }) => {
  const { users, participants, lenguage } = authReducer;

  return {
    users,
    lenguage,
    participants
  };
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    { getAllUsers, getParticipants }
  )(ResumenBoda)
);
