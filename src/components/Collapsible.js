import React from "react";

class Collapsible extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsible: "hidden"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let collapsibleStatus;

    this.setState(prevState => {
      if (prevState.collapsible === "hidden") {
        collapsibleStatus = "collapsable-open";
      } else {
        collapsibleStatus = "hidden";
      }
      return { collapsible: collapsibleStatus };
    });
  }
  render() {
    return (
      <React.Fragment>
        <div className="design-container collapsable-open">
          <div className="design__header arrow" onClick={this.handleClick}>
            <i className={this.props.icon}></i>
            <h3 className="design__header--title">{this.props.title}</h3>
          </div>
          <div className={this.state.collapsible}>{this.props.children}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Collapsible;
