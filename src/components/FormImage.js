import React from 'react';

class FormImage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="form-fill__group-photo">
          <label className="form-fill__label" htmlFor={this.props.htmlFor}> {this.props.label} *</label>
          <input
            className="form-fill__input hidden js-file-input"
            type={this.props.type}
            id={this.props.id}
            name={this.props.name}
          />
          <button
            className="form-fill__group-photo--button js-uploadBtn"
            title="Selecciona tu foto"
          >
            Añadir imagen
          </button>
          <div className="form-fill__group-photo--preview js-preview"></div>
        </div>
      </React.Fragment>
    );
  }
}



export default FormImage;