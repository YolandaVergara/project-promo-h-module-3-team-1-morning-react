import React from 'react';
import FormText from './FormText';
import dataItems from './data/dataItems.json';


class Form extends React.Component {
  render() {
    return (
      dataItems.map((dataItem, key) => {
        console.log(dataItem);
        if (dataItem.component === 'FormText') {
          return (<FormText key={key}
            htmlFor={dataItem.htmlFor}
            label={dataItem.label}
            type={dataItem.type}
            id={dataItem.id}
            name={dataItem.name}
            placeholder={dataItem.placeholder}
            maxlenght={dataItem.maxlenght}
            title={dataItem.title}
          />
          );
        } else {
          return (<FormText key={key}
            htmlFor={dataItem.htmlFor}
            label={dataItem.label}
            type={dataItem.type}
            id={dataItem.id}
            name={dataItem.name}
            placeholder={dataItem.placeholder}
            maxlenght={dataItem.maxlenght}
            title={dataItem.title}
          />
          )
        }
      }
      )

    )
  }
}

export default Form;    