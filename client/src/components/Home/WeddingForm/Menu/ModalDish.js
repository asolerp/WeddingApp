import React from "react";
import { updateModal } from "../../../actions/weddingFormActions";
import { connect } from "react-redux";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const handleClose = props => {
  props.updateModal(false);
};

const ModalDish = props => {
  return (
    <Dialog
      open={props.modal}
      onClose={() => handleClose(props)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        <h1 style={{ fontFamily: "Gloss", fontWeight: 100, fontSize: "8vw", marginBottom: 0, color: "#4c4e19",  }}>
          {props.dish !== undefined && props.dish.title}
        </h1>
      </DialogTitle>
      <DialogContent>
        <div id="alert-dialog-description">
          <img
            style={{ width: "100%", height: "30vh", objectFit: "cover", borderRadius: "5px", marginTop: "5%", boxShadow: "0 0 10px #505050" }}
            src={props.dish !== undefined && props.dish.img}
            alt={props.dish !== undefined && props.dish.title}
          />
          <p style={{ fontFamily: "RLight", color: "#4c4e19" }}> {props.dish !== undefined && props.dish.description}</p>
        </div>
      </DialogContent>
      {/* <DialogActions>
        <Button onClick={() => handleClose(props)} autoFocus style={{color: "#4c4e19"}}>
          Cerrar
        </Button>
      </DialogActions> */}
    </Dialog>
  );
};

const mapStateToProps = ({ weddingFormReducer }) => {
  const { modal, dish } = weddingFormReducer;

  return {
    modal,
    dish
  };
};

export default connect(
  mapStateToProps,
  { updateModal }
)(ModalDish);
