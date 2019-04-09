import React from "react";
import { updateModal } from "../../../actions/weddingFormActions";
import { connect } from "react-redux";

import solomillo from "../../../../images/solomillo.jpg";
import carrilleras from "../../../../images/carrillera.jpg";
import lubina from "../../../../images/lubina.jpg";
import seitan from "../../../../images/seitan.jpg";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";

const tileData = [
  {
    img: solomillo,
    title: "Solomillo",
    description: "Solomillo de ternera con salsa Pedro Ximénez acompañado de  verduras salteadas y patató asado en su jugo de carne.",
    cols: 1
  },
  {
    img: carrilleras,
    title: "Carrilleras",
    description: "Carrilleras de cerdo ibérico glaseadas con pure de patatas violeta, cebolla caramelizada y chips de zanahorias.",
    cols: 1
  },
  {
    img: lubina,
    title: "Lubina ",
    description: "Lubina a la plancha con crema cítrica de chirivia, tirabeques y cherrys risolados, con salsa de cilantro.",
    cols: 1
  },
  {
    img: seitan,
    title: "Seitan",
    description: "Seitán marinado en hierbas con verduras salteadas y patató asado.",
    cols: 1
  }
];

const MainDish = props => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        width: "100vw"
      }}
    >
      <GridList cellHeight={160} cols={2} style={{ width: "100vw" }}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img
              src={tile.img}
              alt={tile.title}
            />
            <GridListTileBar
              title={tile.title}
              subtitle={
                <span>{tile.description}</span>
              }
              actionIcon={
                <IconButton onClick={() => props.updateModal(true, tile)}>
                  <Icon style={{color: "white"}}>info</Icon>
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

const mapStateToProps = ({ weddingFormReducer }) => {
  const { modal } = weddingFormReducer;

  return {
    modal
  };
};

export default connect(
  mapStateToProps,
  { updateModal }
)(MainDish);
