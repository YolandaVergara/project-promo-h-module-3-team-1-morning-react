import React from "react";
import Palette from "./Palette";
import dataPalettes from "./data/dataPalettes.json";

class PalettesList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.handleInput);
    return dataPalettes.map((dataPalette, key) => {
      
      return (
        <Palette
          key={key}
          value={dataPalette.value}
          type={dataPalette.type}
          name={dataPalette.name}
          id={dataPalette.id}
          defaultChecked={dataPalette.defaultChecked}
          color1={dataPalette.colors.color1}
          color2={dataPalette.colors.color2}
          color3={dataPalette.colors.color3}
          handleInput={this.props.handleInput}
          paletteChecked={this.props.paletteChecked}

        />
      );
    });

  }
}

export default PalettesList;
