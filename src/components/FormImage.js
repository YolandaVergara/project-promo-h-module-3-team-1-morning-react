import React from 'react';
import placeholderImage from "../images/paquita.jpg";


class FormImage extends React.Component {
  constructor(props) {
    super(props);

    this.fileInput = React.createRef();

    this.fakeClick = this.fakeClick.bind(this);

    this.handleImage = this.handleImage.bind(this);
  }

  handleImage(ev) {
    const fr = new FileReader();
    const myFile = ev.target.files[0];
    fr.onload = () => {
      this.props.handleInput({
        inputName: 'file',
        inputValue: fr.result
      })

    }
    fr.readAsDataURL(myFile);
  }

  fakeClick(ev) {
    ev.preventDefault();
    this.fileInput.current.click();
  }

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
            ref={this.fileInput}
            value={this.props.value}
            onChange={this.handleImage}


          />
          <button
            className="form-fill__group-photo--button js-uploadBtn"
            title="Selecciona tu foto"
            onClick={this.fakeClick}
          >
            Añadir imagen
          </button>
          <div className="form-fill__group-photo--preview js-preview"
            style={{ backgroundImage: `url(${this.props.file})` }}>

          </div>
        </div>
      </React.Fragment>
    );
  }
}



export default FormImage;