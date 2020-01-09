import React from "react";

class ShareButton extends React.Component {
  constructor(props) {
    super(props);
    this.fetchCard = this.fetchCard.bind(this);
  }
  fetchCard(ev) {
    if (this.props.isFormValid === true) {
      this.props.fetchCard();
    } else {
      ev.preventDefault();
    }
  }
  render() {
    const isFormValid = this.props.isFormValid;
    return (
      <button
        className={`share__card__button-create icon-card ${
          isFormValid ? "" : "button--filter"
        }`}
        title="Crea tu tarjeta"
        type="submit"
        onClick={this.fetchCard}
      >
        Crear tarjeta
      </button>
    );
  }
}

export default ShareButton;
