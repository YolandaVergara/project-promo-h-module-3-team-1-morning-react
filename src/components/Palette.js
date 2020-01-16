import React from "react";
import PropTypes from 'prop-types';

class Palette extends React.Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(ev) {
    let palette = ev.target.value;
    this.props.handleInput({
      inputValue: palette,
      inputName: "palette"
    });
  }
  render() {
    return (
      <div className="form__palette--1">
        <label className="label" htmlFor={this.props.id}></label>
        <input
          value={this.props.value}
          type={this.props.type}
          name={this.props.name}
          id={this.props.id}
          className="design__form--radio"
          checked={this.props.checked}
          onChange={this.handleInput}
        />
        <ul className="palette-color">
          <li className={this.props.color1}></li>
          <li className={this.props.color2}></li>
          <li className={this.props.color3}></li>
        </ul>
      </div>
    );
  }
}

Palette.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  checked: PropTypes.bool,
  color1: PropTypes.string,
  color2: PropTypes.string,
  color3: PropTypes.string,
  handleInput: PropTypes.func,
  palette: PropTypes.string
};

export default Palette;
