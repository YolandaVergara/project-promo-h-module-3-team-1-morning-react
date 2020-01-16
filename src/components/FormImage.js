import React from "react";
import PropTypes from "prop-types";

class FormImage extends React.Component {
  constructor(props) {
    super(props);
    this.photoInput = React.createRef();
    this.fakeClick = this.fakeClick.bind(this);
    this.handleImage = this.handleImage.bind(this);
  }

  handleImage(ev) {
    const fr = new FileReader();
    const myFile = ev.target.files[0];
    fr.onload = () => {
      this.props.handleInput({
        inputName: "photo",
        inputValue: fr.result
      });
    };
    fr.readAsDataURL(myFile);
  }

  fakeClick(ev) {
    ev.preventDefault();
    this.photoInput.current.click();
  }

  render() {
    return (
      <div className="form-fill__group-photo">
        <label className="form-fill__label" htmlFor={this.props.htmlFor}>
          {this.props.label} *
        </label>
        <input
          className="form-fill__input hidden"
          type={this.props.type}
          id={this.props.id}
          name={this.props.name}
          ref={this.photoInput}
          value={this.props.value}
          accept={this.props.accept}
          onChange={this.handleImage}
        />
        <button
          className="form-fill__group-photo--button"
          type="button"
          title="Selecciona tu foto"
          onClick={this.fakeClick}
        >
          Añadir imagen
        </button>
        <div
          className="form-fill__group-photo--preview"
          style={{ backgroundImage: `url(${this.props.photo})` }}
        ></div>
      </div>
    );
  }
}

FormImage.propTypes = {
  htmlFor: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  accept: PropTypes.string,
  handleInput: PropTypes.func,
  photo: PropTypes.string
};

export default FormImage;
