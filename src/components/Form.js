import React from "react";
// import "../stylesheets/variables.scss";
import "../stylesheets/fill.scss";

function Form() {
  return (
    <form action="" method="" id="js-form-fill" className="js-form">
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
  );
}

export default Form;
