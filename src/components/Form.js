import React from 'react';
import FormElement from './FormElement';
import dataItems from './data/dataItems.js';


class Form extends React.Component{
  render() {    
      return ( 
      dataItems.map((dataItem, key) => {
        console.log(dataItem);
        return (<FormElement key={key} 
          
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
      ) 
    
  )
}
}

export default Form;    