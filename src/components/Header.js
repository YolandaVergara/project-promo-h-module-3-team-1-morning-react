import React from "react";
import "../stylesheets/layout/header.scss";
import logo from "../images/logo-awesome.svg";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Logo Awesome profile cards" title="Inicio" />
    </header>
  );
}

export default Header;
