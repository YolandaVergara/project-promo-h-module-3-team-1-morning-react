import React from 'react';

class Pallete extends React.Component {
  render() {
    return (
      <React.Fragment>
       <div className="form__palette--1">
              <label className="label" htmlFor=""></label>
              <input value="1" type="radio" name="palette" id="form-palette1" className="design__form--radio js-form-palette1" defaultChecked="checked" />
              <ul className="palette-color">
                <li className="palette-color__1"></li>
                <li className="palette-color__2"></li>
                <li className="palette-color__3"></li>
              </ul>
            </div>
      </React.Fragment>
    );
  }
}



export default Pallete;