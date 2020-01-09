import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Logo from "../images/logo-awesome.svg"
import "../stylesheets/layout/landing-main.scss";

function Landing() {
  return (
    <React.Fragment>
      <div class="landing__container">
        <img
          class="landing__image"
          src={Logo}
          alt="logo awesome profile cards"
          title="Logo Awesome-cards"
        />
        <section class="landing__main-section">
          <h1 class="landing__main-section__title">Crea tu tarjeta de visita</h1>
          <p class="landing__main-section__text">
            Crea mejores contactos profesionales de forma fácil y cómoda
    </p>
        </section>
        <nav class="landing__menu">
          <ul class="landing__menu__list">
            <li class="landing__menu__list--design icon-land-design">
              <p>Diseña</p>
            </li>
            <li class="landing__menu__list--fill icon-land-fill">
              <p>Rellena</p>
            </li>
            <li class="landing__menu__list--share icon-land-share">
              <p>Comparte</p>
            </li>
          </ul>
        </nav>
        <Link to="./Main" className="landing__button" href="cards.html" title="Crea tu tarjeta"
        >Comenzar
        </Link>
      </div>
      <Footer />
    </React.Fragment>
  )
}
export default Landing;


