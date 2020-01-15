import React from "react";
import Loader from "./Loader";

class ShareButton extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.createFetchCard = this.createFetchCard.bind(this);
  }
  createFetchCard(ev) {
    if (this.props.isFormValid === true) {
      this.props.createFetchCard();
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
          onClick={this.createFetchCard}
        >
          Crear tarjeta
        </button>
        {/*  */}
        <div className="share__notification js-share--url">
          <Loader isLoading={this.props.isLoading} />
          {/* aqui había un <p> con un mensaje de error, luego el Loading y cardSuccess */}
          <h4 className="notification__title">La tarjeta ha sido creada:</h4>
          <p
            className="notification__link js-notification-link"
            title="Comparte tu tarjeta con este link"
          >
            {this.props.URL}
          </p>
          <a
            className="notification__button-tw js__button-Twitter icon-tw"
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
