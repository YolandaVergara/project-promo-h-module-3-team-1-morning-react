import React from "react";
import PropTypes from 'prop-types';
import Palette from "./Palette";
import dataPalettes from "./data/dataPalettes.json";
import { checkPropTypes } from "prop-types";

class PalettesList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return dataPalettes.map((dataPalette, key) => {
      return (
        <Palette
          key={key}
          value={dataPalette.value}
          type={dataPalette.type}
          name={dataPalette.name}
          id={dataPalette.id}
          checked={dataPalette.value === this.props.palette}
          color1={dataPalette.colors.color1}
          color2={dataPalette.colors.color2}
          color3={dataPalette.colors.color3}
          handleInput={this.props.handleInput}
          palette={this.props.palette}
        />
      );
    });
  }
}

PalettesList.propTypes = {
  palette: PropTypes.string,
  handleInput: PropTypes.func
}

export default PalettesList;
