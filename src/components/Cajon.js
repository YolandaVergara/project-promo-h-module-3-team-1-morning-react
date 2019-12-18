import React from "react";
import Form from "./Form";
import PalettesList from "./PalettesList";

import "../stylesheets/layout/design.scss";
import "../stylesheets/layout/fill.scss";
import "../stylesheets/layout/share.scss";

function Cajon() {
  return (
    <div>
      <section className="design-container js-collapsable collapsable-open">
        <div className="design__header icons-1 arrow js-collapsable--trigger">
          <h4 className="design__header--title">diseña</h4>
        </div>
        <div className="design__form collapsable--content">
          <h5 className="design__form--title">colores</h5>
          <form className="form__palette" id="js-form-design">
            <PalettesList />
          </form>
        </div>
      </section>

      <form action="" method="" id="js-form-fill" className="js-form collapsable-open">
        <fieldset className="form-fill">
          <div className="form-fill__group--title icons-2 arrow js-collapsable--trigger">
            <legend className="form-fill__title">Rellena</legend>
          </div>
          <div className="form-fill__content collapsable--content">

            <Form />

            <span className="legend">Los campos señalados con * son obligatorios</span>
          </div>
        </fieldset>
      </form>
      <section className="share__container js-collapsable collapsable-open">
        <div className="share__header icons-3 arrow js-collapsable--trigger">
          <h4 className="share__title">comparte</h4>
        </div>
        <div className="share__card collapsable--content">
          <button className="share__card__button-create icon-card button--filter js-share-button" title="Crea tu tarjeta">
            Crear tarjeta
          </button>
          <div className="share__notification js-share--url share--url">
            <h4 className="notification__title">La tarjeta ha sido creada:</h4>
            <p className="notification__link js-notification-link" title="Comparte tu tarjeta con este link"></p>
            <a className="notification__button-tw js__button-Twitter icon-tw" href="" title="Comparte tu tarjeta a través de twitter" target="_blank">
              Compartir en twitter
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cajon;
