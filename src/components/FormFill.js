import React from 'react';
import FormText from './FormText';
import dataFields from './data/dataFields.json';
import FormImage from './FormImage';


class FormFill extends React.Component {
  render() {
    return (
      dataFields.map((dataField, key) => {
        if (dataField.component === 'FormText') {
          return (<FormText key={key}
            htmlFor={dataField.htmlFor}
            label={dataField.label}
            type={dataField.type}
            id={dataField.id}
            name={dataField.name}
            placeholder={dataField.placeholder}
            maxlenght={dataField.maxlenght}
            title={dataField.title}
          />
          );
        } else {
          return (<FormImage key={key}
            htmlFor={dataField.htmlFor}
            label={dataField.label}
            type={dataField.type}
            id={dataField.id}
            name={dataField.name}
          />
          )
        }
      }
      )
    )
  }
}

export default FormFill;    