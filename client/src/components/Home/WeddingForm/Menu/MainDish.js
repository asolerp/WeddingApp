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



const MainDish = props => {


const { dishes } = props.lenguage.Menu

const tileData = [
  {
    img: solomillo,
    title: dishes.solomillo.name,
    description: dishes.lubina.description,
    cols: 1
  },
  {
    img: carrilleras,
    title: dishes.carrilleras.name,
    description: dishes.carrilleras.description,
    cols: 1
  },
  {
    img: lubina,
    title: dishes.lubina.name,
    description: dishes.lubina.description,
    cols: 1
  },
  {
    img: seitan,
    title: dishes.seitan.name,
    description: dishes.seitan.description,
    cols: 1
  }
];

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

const mapStateToProps = ({ authReducer, weddingFormReducer }) => {
  const { lenguage } = authReducer
  const { modal } = weddingFormReducer;

  return {
    modal,
    lenguage
  };
};

export default connect(
  mapStateToProps,
  { updateModal }
)(MainDish);
