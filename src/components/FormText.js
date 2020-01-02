import React from "react";
import PropTypes from "prop-types";

class FormText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  render() {
    return (
      <React.Fragment>
        <label className="form-fill__label" htmlFor={this.props.htmlFor}>
          {this.props.label} *
        </label>
        <input
          className="form-fill__input js-form-name"
          type={this.props.type}
          id={this.props.id}
          name={this.props.name}
          placeholder={this.props.placeholder}
          maxlenght={this.props.maxlenght}
          title={this.props.title}
          onChange={this.handleInput}
        />
      </React.Fragment>
    );
  }
}

FormText.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  maxlenght: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  component: PropTypes.string.isRequired
};

export default FormText;
