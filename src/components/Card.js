import React from "react";
import "../stylesheets/pages/card.scss";
import "../stylesheets/components/cards-photo.scss";

function Card() {
  return (
    <React.Fragment>
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
              <li className="card-photo__card__links__items js-tel tel js-items--filter items--filter">
                <a href="#" className="icon-tel js-card-tel" title="Teléfono" target="_blank"></a>
              </li>
              <li className="card-photo__card__links__items js-email email js-items--filter items--filter">
                <a href="#" className="icon-mail js-card-email" title="Email" target="_blank"></a>
              </li>
              <li className="card-photo__card__links__items js-linkedin linkedin js-items--filter items--filter">
                <a href="#" className="icon-linkedin js-card-linkedin" title="Linkedin" target="_blank"></a>
              </li>
              <li className="card-photo__card__links__items js-github github js-items--filter items--filter">
                <a href="#" className="icon-github js-card-github" title="GitHub" target="_blank"></a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Card;
