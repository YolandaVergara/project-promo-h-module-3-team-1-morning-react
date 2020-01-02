import React from "react";
import PropTypes from "prop-types";

class Palette extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="form__palette--1">
          <label className="label" htmlFor={this.props.id}></label>
          <input
            value={this.props.value}
            type={this.props.type}
            name={this.props.name}
            id={this.props.id}
            className="design__form--radio js-form-palette1"
            defaultChecked={this.props.defaultChecked}
          />
          <ul className="palette-color">
            <li className={this.props.color1}></li>
            <li className={this.props.color2}></li>
            <li className={this.props.color3}></li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

Palette.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  defaultChecked: PropTypes.string,
  color1: PropTypes.string,
  color2: PropTypes.string,
  color3: PropTypes.string
};

export default Palette;
