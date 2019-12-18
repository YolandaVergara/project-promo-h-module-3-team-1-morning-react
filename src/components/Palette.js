import React from "react";

class Palette extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="form__palette--1">
          <label className="label" htmlFor={this.props.htmlFor}></label>
          <input value={this.props.value} type={this.props.type} name={this.props.name} id={this.props.id} className="design__form--radio js-form-palette1" defaultChecked={this.props.defaultChecked} />
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

export default Palette;
