import React from "react";

class ShareButton extends React.Component {
  constructor(props) {
    super(props);
    this.fetchCard = this.fetchCard.bind(this);
  }
  fetchCard(ev) {
    if (this.props.isFormValid === true) {
      this.props.fetchCard.bind();
    } else {
      ev.preventDefault();
    }
  }
  render() {
    const isFormValid = this.props.isFormValid;
    return (
      <React.Fragment>
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
        {/*  */}
        <div className="share__notification">
          {/* aqui había un <p> con un mensaje de error, luego el Loading y cardSuccess */}
          <h4 className="notification__title">La tarjeta ha sido creada:</h4>
          <p
            className="notification__link"
            title="Comparte tu tarjeta con este link"
          >
            {this.props.URL}
          </p>
          <a
            className="notification__button-tw icon-tw"
            href={`https://twitter.com/intent/tweet?text=He%20creado%20esta%20tarjeta%20con%20Awesome%20Profile%20Cards:%0A;hashtags=Adalab, AwesomeProfileCards, promoHamilton ${this.props.URL}`}
            title="Comparte tu tarjeta a través de twitter"
            target="_blank"
          >
            Compartir en twitter
          </a>
        </div>
      </React.Fragment>
    );
  }
}

export default ShareButton;
