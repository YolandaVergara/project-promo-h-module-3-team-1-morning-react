import React from "react";
import Icons from "./Icons";

import "../stylesheets/pages/card.scss";
import "../stylesheets/components/cards-photo.scss";
import CollapsibleContainer from "./CollapsibleContainer";

function Card(props) {
  return (
    <section className="card-photo">
      <div className="card-photo__button">
        <button type="button" className="card-photo__button__reset icon-reset js-reset-button" title="Reset">
          Reset
          </button>
      </div>

      <div className="card-photo__card js-card card-palette1">
        <div className="card-photo__card__info border-info">
          <h2 className="card-photo__card__info__name js-card-name card-name">Nombre Apellido</h2>
          <h3 className="card-photo__card__info__job js-card-job">Profesión</h3>
        </div>

        <div className="card-photo__card__image js-image-profile" alt="Avatar" title="Imagen del usuario"></div>

        <div>
          <ul className="card-photo__card__links">
            <Icons />
            <li className="card-photo__card__links__items js-tel tel js-items--filter items--filter">
              <a href={props.href} className={props.className} title={props.title} target={props.target}></a>
            </li>
            <li className="card-photo__card__links__items js-email email js-items--filter items--filter">
              <a href={props.href} className={props.className} title={props.title} target={props.target}></a>
            </li>
            <li className="card-photo__card__links__items js-linkedin linkedin js-items--filter items--filter">
              <a href={props.href} className={props.className} title={props.title} target={props.target}></a>
            </li>
            <li className="card-photo__card__links__items js-github github js-items--filter items--filter">
              <a href={props.href} className={props.className} title={props.title} target={props.target}></a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Card;
