import React from "react";

class Collapsible extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <React.Fragment>
                <div className="design-container collapsable-open">
                    <div className="design__header arrow">
                        <i className={this.props.icon}></i>
                        <h3 className="design__header--title">{this.props.title}</h3>
                    </div>
                    <div>
                        {this.props.children}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default Collapsible;
