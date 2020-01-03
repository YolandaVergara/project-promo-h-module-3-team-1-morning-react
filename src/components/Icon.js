import React from "react";

function Icon(props) {
  console.log(props);

  return (
    <li className="card-photo__card__links__items js-tel tel js-items--filter items--filter">
      <a
        href={props.href}
        className={props.className}
        title={props.title}
        target={props.target}
        phone={props.phone}
        email={props.email}
        linkedin={props.linkedin}
        github={props.github}
      ></a>
    </li>
  );
}

export default Icon;
