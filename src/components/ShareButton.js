import React from "react";
import PropTypes from 'prop-types';
import Loader from "react-easy-loader";
import "../stylesheets/layout/loader.scss";

class ShareButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleFetch = this.handleFetch.bind(this);
  }
  handleFetch(ev) {
    if (this.props.isFormValid === true) {
      return this.props.createFetchCard();
    } else {
      ev.preventDefault();
    }
  }
  render() {
    const isFormValid = this.props.isFormValid;
    const cardSuccess = this.props.cardSuccess;
    const loader = this.props.isLoading ? (
      <div className="loader">
        <Loader loading="true" />
      </div>
    ) : null;
    return (
      <React.Fragment>
        <button
          className={`share__card__button-create icon-card ${
            isFormValid ? "" : "button--filter"
            }`}
          title="Crea tu tarjeta"
          type="submit"
          onClick={this.handleFetch}
        >
          Crear tarjeta
        </button>
        {loader}
        <div
          className={`icon-card ${
            cardSuccess === false ? "hidden" : "share__notification"
            }`}
        >
          <h4 className="notification__title">La tarjeta ha sido creada:</h4>
          <a
            className="notification__link"
            title="Comparte tu tarjeta con este link"
            href={this.props.url}
            target="_blank"
          >
            {this.props.url}
          </a>
          <a
            className="notification__button-tw icon-tw"
            href={`https://twitter.com/intent/tweet?text=He%20creado%20esta%20tarjeta%20con%20Awesome%20Profile%20Cards:%0A;hashtags=Adalab, AwesomeProfileCards, promoHamilton ${this.props.url}`}
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

ShareButton.propTypes = {
  isFormValid: PropTypes.bool,
  createFetchCard: PropTypes.func,
  url: PropTypes.string,
  cardSuccess: PropTypes.bool,
  isLoading: PropTypes.bool
}

export default ShareButton;
