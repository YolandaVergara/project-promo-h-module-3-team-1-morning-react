import React from "react";
import Form from "./Form";

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
            <div className="form__palette--1">
              <label className="label" htmlFor=""></label>
              <input value="1" type="radio" name="palette" id="form-palette1" className="design__form--radio js-form-palette1" defaultChecked="checked" />
              <ul className="palette-color">
                <li className="palette-color__1"></li>
                <li className="palette-color__2"></li>
                <li className="palette-color__3"></li>
              </ul>
            </div>
            <div className="form__palette--2">
              <label className="label" htmlFor="">
                {" "}
              </label>
              <input value="2" type="radio" name="palette" id="form-palette2" className="design__form--radio js-form-palette2" />
              <ul className="palette-color">
                <li className="palette-color__4"></li>
                <li className="palette-color__5"></li>
                <li className="palette-color__6"></li>
              </ul>
            </div>
            <div className="form__palette--3">
              <label className="label" htmlFor=""></label>
              <input value="3" type="radio" name="palette" id="form-palette3" className="design__form--radio js-form-palette3" />
              <ul className="palette-color">
                <li className="palette-color__7"></li>
                <li className="palette-color__8"></li>
                <li className="palette-color__9"></li>
              </ul>
            </div>
            <div className="form__palette--4">
              <label className="label" htmlFor=""></label>
              <input value="4" type="radio" name="palette" id="form-palette4" className="design__form--radio js-form-palette4" />
              <ul className="palette-color">
                <li className="palette-color__10"></li>
                <li className="palette-color__11"></li>
                <li className="palette-color__12"></li>
              </ul>
            </div>
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
