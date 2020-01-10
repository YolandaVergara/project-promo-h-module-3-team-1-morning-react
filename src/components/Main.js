import React from "react";
import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";
import CollapsibleContainer from "./CollapsibleContainer";
import localStorage from "../localStorage/localStorage";
import { fetchCard } from '../services/FetchCard';

class Main extends React.Component {
  constructor(props) {
    super(props);
    const localStorageData = localStorage.get("userData", {

      paletteChecked: '1',
      name: "",
      job: "",
      file: "",
      phone: "",
      email: "",
      linkedin: "",
      github: "",
      isFormValid: false
    });

    this.state = localStorageData;
    this.handleInput = this.handleInput.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  // Botón Reset

  handleReset() {
    this.setState({
      paletteChecked: '1',
      name: "",
      job: "",
      file: "",
      phone: "",
      email: "",
      linkedin: "",
      github: ""
    });
  }

  // Validación del Form

  validateForm() {
    const email = this.state.email;
    const phone = this.state.phone;

    const newState = {
      ...this.state, phone: phone.match(/^[0-9]{9}/), email: email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
    };

    if (
      newState.name && newState.job && newState.file && newState.phone && newState.email && newState.linkedin && newState.github) {
      this.setState({
        isFormValid: true
      })
    } else {
      this.setState({
        isFormValid: false
      })
    }
  };


  // Manejo de inputs, paletas e imagen

  handleInput(data) {
    const name = data.inputName;
    const value = data.inputValue;
    this.setState(
      { [name]: value },
      () => {
        this.validateForm();
      });
  }

  // Local Storage

  componentDidUpdate() {
    localStorage.set("userData", this.state);
  }

  render() {

    return (
      <div className="App">
        <Header />

        <main className="cards">
          <Card
            info={this.state}
            file={this.state.file}
            handleReset={this.handleReset}

          />
          <CollapsibleContainer
            handleInput={this.handleInput}
            info={this.state}
            file={this.state.file}
            isFormValid={this.state.isFormValid}


          />
        </main>

        <Footer />
      </div>
    );
  }
}

export default Main;
