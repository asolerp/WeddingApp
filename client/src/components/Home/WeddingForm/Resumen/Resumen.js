import React from "react";
import { connect } from "react-redux";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import { ResumenStyleComponent } from "./ResumenStyle";

import foto1 from "../../../../images/resumen.jpg";

const Resumen = props => {
  return (
    <ResumenStyleComponent>
      <img src={foto1} alt="familia" />
      <div className="header">
        <p className="title">Resumen</p>
      </div>
      <div className="attendance">
        <Table style={{ width: "100vw" }}>
          <TableHead>
            <TableRow>
              <TableCell padding="none" align="center">
                Invitado
              </TableCell>
              <TableCell padding="none" align="center">
                Asistencia
              </TableCell>
              <TableCell padding="none" align="center">
                Bus
              </TableCell>
              <TableCell padding="none" align="center">
                Menu
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
                  {participant.atendance ? "Sí" : "No"}
                </TableCell>
                <TableCell padding="none" align="center">
                  {participant.bus ? "Sí" : "No"}
                </TableCell>
                <TableCell padding="none" align="center">
                  {participant.dish}
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
