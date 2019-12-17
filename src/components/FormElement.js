import React from "react";

class FormElement extends React.Component{
    render(){
        return(
          <React.Fragment>
            <label className="form-fill__label" htmlFor={this.props.htmlFor}>
            {this.props.label} *
            </label>
            <input className="form-fill__input js-form-name" 
            type={this.props.type} 
            id={this.props.id} 
            name={this.props.name} 
            placeholder={this.props.placeholder} maxlenght={this.props.maxlenght}  title={this.props.title} />
          </React.Fragment>
        );        
    }
}
export default FormElement;