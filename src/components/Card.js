import React from "react";
import PropTypes from 'prop-types';
import Icons from "./Icons";
import placeholderImage from "../images/paquita.jpg";
import "../stylesheets/pages/card.scss";
import "../stylesheets/components/cards-photo.scss";

function Card(props) {
  function handleReset(ev) {
    ev.preventDefault();
    props.handleReset();
  }
  return (
    <section className="card-photo">
      <div className="card-photo__button">
        <button
          type="button"
          className="card-photo__button__reset icon-reset"
          title="Reset"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
      <div className={`card-photo__card card-palette${props.info.palette}`}>
        <div className="card-photo__card__info border-info">
          <h2 className="card-photo__card__info__name card-name">
            {props.info.name || "Nombre Apellido"}
          </h2>
          <h3 className="card-photo__card__info__job">
            {props.info.job || "Profesión"}
          </h3>
        </div>
        <div
          className="card-photo__card__image"
          alt="Avatar"
          title="Imagen del usuario"
          style={{ backgroundImage: `url(${props.photo || placeholderImage})` }}
        ></div>
        <div>
          <ul className="card-photo__card__links">
            <Icons info={props.info} />
          </ul>
        </div>
      </div>
    </section>
  );
}

Card.propTypes = {
  info: PropTypes.object,
  photo: PropTypes.string,
  handleReset: PropTypes.func
}

export default Card;
