import React from 'react';
import Palette from './Palette';
import dataPalettes from './data/dataPalettes.json';


class PalettesList extends React.Component {
  render() {
    return (
      dataPalettes.map((dataPalette, key) => {
          return (<Palette key={key}
            htmlFor={dataPalette.htmlFor}
            value={dataPalette.value}
            type={dataPalette.type}
            name={dataPalette.name}
            id={dataPalette.id}
            defaultChecked={dataPalette.defaultChecked}
            color1={dataPalette.colors.color1}
            color2={dataPalette.colors.color2}
            color3={dataPalette.colors.color3}
          />
          );
        } 
      )

    )
  }
}

export default PalettesList;    