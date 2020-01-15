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
      isFormValid: false,
      URL: "",
      isLoading: false,
      cardSuccess: "",

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

  // Collapsible container


  // Local Storage

  componentDidUpdate() {
    localStorage.set("userData", this.state);
  }

  // Fetch
  fetchCard() {
    const JSON = JSON.parse(localStorage.getItem("data"));
    fetchCard(JSON)
      .then(result => this.createURL(result))
      .catch(error => console.log(error));
    this.setState({
      isLoading: true
    });
  }

  // Helpers

  createURL(result) {
    if (result.success) {
      this.setState({
        URL: result.URL,
        isLoading: false,
        cardSuccess: true
      });
    } else {
      this.setState({
        URL: "ERROR:" + result.error,
        isLoading: false
      });
    }
  }

  render() {
    console.log(this.state);

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
            fetchCard={this.props.fetchCard}
            //
            URL={this.state.URL}

          /*cardSuccess={this.state.cardSuccess}
          isLoading={this.state.isLoading}*/


          />
        </main>

        <Footer />
      </div>
    );
  }
}

export default Main;
