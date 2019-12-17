import React from "react";
import "../stylesheets/layout/footer.scss";
import logocard from "../images/logo-card.png";
import logofooter from "../images/logo-adalab-awesome.png";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copy">Awesome profile-cards &copy;2019</p>
      <img className="footer__logoCard" src={logocard} alt="Logo CardToGo" title="¡Gracias por usar nuestra app!" />
      <img className="footer__logo" src={logofooter} alt="Logo Adalab" title="¡Volver arriba!" />
    </footer>
  );
}

export default Footer;
