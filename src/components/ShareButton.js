import React from "react";

class ShareButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const isFormValid = this.props.isFormValid
    return (
      <button
        className={`share__card__button-create icon-card ${isFormValid ? "" : "button--filter"}`}
        title="Crea tu tarjeta"
        type="submit"
      // onClick={this.handleSubmit}
      >
        Crear tarjeta
      </button>
    )
  }
}


export default ShareButton;