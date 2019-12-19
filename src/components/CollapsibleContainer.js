import React from "react";
import PalettesList from "./PalettesList";
import FormFill from "./FormFill";
import Collapsible from "./Collapsible";

class CollapsibleContainer extends React.Component {
  render() {
    return (
      <React.Fragment>

        <Collapsible
          icon="icons-1"
          title="Diseña"
        >
          <div className="design__form">
            <h5 className="design__form--title">colores</h5>
            <form className="form__palette" id="js-form-design">
              <PalettesList />
            </form>
          </div>

        </Collapsible>

        <Collapsible
          icon="icons-2"
          title="Rellena"
        >
          <form action="" method="" id="js-form-fill" className="js-form collapsable-open">
            <fieldset className="form-fill">
              <div className="form-fill__content collapsable--content">
                <FormFill />
                < span className="legend" > Los campos señalados con * son obligatorios</span>
              </div>
            </fieldset>
          </form>
        </Collapsible>

        <Collapsible
          icon="icons-3"
          title="Comparte"
        >
          <section className="share__container js-collapsable collapsable-open">

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
        </Collapsible>




      </React.Fragment >
    );
  }
}
export default CollapsibleContainer;
