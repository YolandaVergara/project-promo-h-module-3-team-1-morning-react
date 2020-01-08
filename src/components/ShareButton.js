import React from "react";


class ShareButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(ev) {
    console.log(ev);
  }

  render() {
    return (
      <button
        className="share__card__button-create icon-card button--filter js-share-button"
        title="Crea tu tarjeta"
        type="submit"
        onClick={this.handleSubmit}
      >
        Crear tarjeta
      </button>

    )
  }
}

export default ShareButton;