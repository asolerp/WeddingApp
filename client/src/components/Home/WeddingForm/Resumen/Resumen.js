import React from "react";
import { connect } from "react-redux";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import Icon from "@material-ui/core/Icon";


import { ResumenStyleComponent } from "./ResumenStyle";

import foto1 from "../../../../images/resumen.jpg";

const getTraducedDish = (dish, props) => {

  switch (dish) {
    case "Solomillo":
    return props.lenguage.Menu.dishes.solomillo.name
    case "Carrilleras":
    return props.lenguage.Menu.dishes.carrilleras.name
    case "Lubina":
    return props.lenguage.Menu.dishes.lubina.name
    case "Seitan":
    return props.lenguage.Menu.dishes.seitan.name
  }

}

const Resumen = props => {
  return (
    <ResumenStyleComponent>
      <img src={foto1} alt="familia" />
      <div className="header">
        <p className="title">{props.lenguage.Resumen.title}</p>
      </div>
      <div className="attendance">
        <Table style={{ width: "100vw" }}>
          <TableHead>
            <TableRow>
              <TableCell padding="none" align="center">
              {props.lenguage.Resumen.tabla.invitados}
              </TableCell>
              <TableCell padding="none" align="center">
              {props.lenguage.Resumen.tabla.asistencia}
              </TableCell>
              <TableCell padding="none" align="center">
              {props.lenguage.Resumen.tabla.bus}
              </TableCell>
              <TableCell padding="none" align="center">
              {props.lenguage.Resumen.tabla.menu}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.user.participants.map(participant => (
              <TableRow key={participant.name}>
                <TableCell padding="none" align="center">
                  {participant.name}
                </TableCell>
                <TableCell padding="none" align="center">
                {participant.atendance ? (
                        <Icon style={{ color: "#4BC0C0" }}>check_circle</Icon>
                      ) : (
                        <Icon style={{ color: "#FF6384" }}>cancel</Icon>
                      )}
                </TableCell>
                <TableCell padding="none" align="center">
                {participant.bus ? (
                        <Icon style={{ color: "#4BC0C0" }}>check_circle</Icon>
                      ) : (
                        <Icon style={{ color: "#FF6384" }}>cancel</Icon>
                      )}
                </TableCell>
                <TableCell padding="none" align="center">
                      {getTraducedDish(participant.dish, props)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </ResumenStyleComponent>
  );
};

const mapStateToProps = ({ authReducer, weddingFormReducer }) => {
  const { user, lenguage } = authReducer;
  const { formStatus } = weddingFormReducer;
  return {
    user,
    lenguage, 
    formStatus
  };
};

export default connect(
  mapStateToProps,
  {}
)(Resumen);
