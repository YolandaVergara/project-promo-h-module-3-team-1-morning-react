import React from "react";

import "../stylesheets/layout/design.scss";
import "../stylesheets/layout/fill.scss";
import "../stylesheets/layout/share.scss";

function Form() {
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
            <label className="form-fill__label" htmlFor="form-name">
              Nombre completo *
            </label>
            <input className="form-fill__input js-form-name" type="text" id="form-name" name="name" placeholder="Ej:Paquita Salas" maxlenght="30" pattern="[A-zA-Z ]{2,30}" title="Introduce entre 2 y 30 letras" required />

            <label className="form-fill__label" htmlFor="form-job">
              Puesto *
            </label>
            <input className="form-fill__input js-form-job" type="text" id="form-job" name="job" placeholder="Ej:Representante de artistas" maxlenght="30" pattern="[A-zA-Z ]{2,30}" title="Introduce entre 2 y 30 letras" required />
            <div className="form-fill__group-photo">
              <label className="form-fill__label" htmlFor="form-photo">
                Imagen de perfil
              </label>
              <input className="form-fill__input hidden js-file-input" type="file" id="form-photo" name="photo" />
              <button className="form-fill__group-photo--button js-uploadBtn" title="Selecciona tu foto">
                Añadir imagen
              </button>
              <div className="form-fill__group-photo--preview js-preview"></div>
            </div>
            <label className="form-fill__label" htmlFor="form-phone">
              Teléfono *
            </label>
            <input className="form-fill__input js-form-tel" type="tel" id="form-phone" name="phone" placeholder="Ej: 666778899" pattern="[0-9]{9}" title="Número de 9 cifras" required />

            <label className="form-fill__label" htmlFor="form-email">
              Email *
            </label>
            <input className="form-fill__input js-form-email" type="email" id="form-email" name="email" placeholder="Ej: psmanagement@gmail.com" required />

            <label className="form-fill__label" htmlFor="form-linkedin">
              Linkedin *
            </label>
            <input className="form-fill__input js-form-linkedin" type="text" id="form-linkedin" name="linkedin" placeholder="Ej: paquitasalas" required />

            <label className="form-fill__label" htmlFor="form-github">
              Github
            </label>
            <input className="form-fill__input js-form-github" type="text" id="form-github" name="github" placeholder="Ej: paquitasalas" />
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

export default Form;
