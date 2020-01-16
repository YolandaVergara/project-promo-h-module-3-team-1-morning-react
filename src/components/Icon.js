import React from "react";

function Icon(props) {
  return (
    <li
      className={`card-photo__card__links__items ${
        props.href === "" ? "items--filter" : ""
      }`}
    >
      <a
        href={`${props.prefix}${props.href}`}
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
