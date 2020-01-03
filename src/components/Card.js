import React from "react";
import Icons from "./Icons";

import "../stylesheets/pages/card.scss";
import "../stylesheets/components/cards-photo.scss";

function Card(props) {
  return (
    <section className="card-photo">
      <div className="card-photo__button">
        <button
          type="button"
          className="card-photo__button__reset icon-reset js-reset-button"
          title="Reset"
        >
          Reset
        </button>
      </div>

      <div className="card-photo__card js-card card-palette1">
        <div className="card-photo__card__info border-info">
          <h2 className="card-photo__card__info__name js-card-name card-name">
            {props.name || "Nombre Apellido"}
          </h2>
          <h3 className="card-photo__card__info__job js-card-job">
            {props.job || "Profesión"}
          </h3>
        </div>

        <div
          className="card-photo__card__image js-image-profile"
          alt="Avatar"
          title="Imagen del usuario"
        ></div>

        <div>
          <ul className="card-photo__card__links">
            <Icons
              phone={props.phone}
              email={props.email}
              linkedin={props.linkedin}
              github={props.github}
            />
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Card;
