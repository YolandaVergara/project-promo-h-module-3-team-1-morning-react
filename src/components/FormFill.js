import React from "react";
import FormText from "./FormText";
import dataFields from "./data/dataFields.json";
import FormImage from "./FormImage";

class FormFill extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      dataFields.map((dataField, key) => {
        if (dataField.component === 'FormText') {
          return (<FormText
            key={key}
            htmlFor={dataField.htmlFor}
            label={dataField.label}
            type={dataField.type}
            id={dataField.id}
            name={dataField.name}
            placeholder={dataField.placeholder}
            maxlenght={dataField.maxlenght}
            title={dataField.title}
            handleInput={this.props.handleInput}
          />
          );
        } else {
          return (<FormImage
            key={key}
            htmlFor={dataField.htmlFor}
            label={dataField.label}
            type={dataField.type}
            id={dataField.id}
            name={dataField.name}
            handleInput={this.props.handleInput}
            file={this.props.file}
          />
          )
        }
      }))
  }
}

export default FormFill;
