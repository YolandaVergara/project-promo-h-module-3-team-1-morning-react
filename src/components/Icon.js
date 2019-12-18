import React from 'react';


function Icon(props){
return(
    <li className="card-photo__card__links__items js-tel tel js-items--filter items--filter">
    <a href={props.href} className={props.className} title={props.title} target={props.target}></a>
  </li>


)

}

export default Icon;