import React from "react";
import PalettesList from "./PalettesList";
import FormFill from "./FormFill";
import Collapsible from "./Collapsible";
import ShareButton from "./ShareButton";

class CollapsibleContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  handleSubmit(ev) {
    ev.preventDefault();
  }
  render() {
    return (
      <div className="form">
        <Collapsible icon="icons-1" title="Diseña">
          <div className="design__form">
            <h5 className="design__form--title">colores</h5>
            <form className="form__palette" id="form-design" method="POST">
              <PalettesList
                palette={this.props.info.palette}
                handleInput={this.props.handleInput}
              />
            </form>
          </div>
        </Collapsible>
        <Collapsible icon="icons-2" title="Rellena">
          <form
            method="POST"
            id="form-fill"
            className=" collapsable-open"
            onSubmit={this.handleSubmit}
          >
            <fieldset className="form-fill">
              <div className="form-fill__content collapsable--content">
                <FormFill
                  handleInput={this.props.handleInput}
                  photo={this.props.photo}
                  info={this.props.info}
                />
                <span className="legend">
                  Los campos señalados con * son obligatorios
                </span>
              </div>
            </fieldset>
          </form>
        </Collapsible>
        <Collapsible icon="icons-3" title="Comparte">
          <section className="share__container collapsable-open">
            <div className="share__card collapsable--content">
              <ShareButton
                isFormValid={this.props.isFormValid}
                createFetchCard={this.props.createFetchCard}
                url={this.props.url}
                cardSuccess={this.props.cardSuccess}
                isLoading={this.props.isLoading}
              />
            </div>
          </section>
        </Collapsible>
      </div>
    );
  }
}
export default CollapsibleContainer;
