import React from "react";
import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";
import CollapsibleContainer from "./CollapsibleContainer";
import localStorage from "../localStorage/localStorage";

class Main extends React.Component {
  constructor(props) {
    super(props);
    const localStorageData = localStorage.get("userData", {
      palette: "1",
      name: "",
      job: "",
      photo: "",
      phone: "",
      email: "",
      linkedin: "",
      github: "",
      isFormValid: false,
      url: "",
      isLoading: false,
      cardSuccess: false
    });

    this.state = localStorageData;
    this.handleInput = this.handleInput.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleFetch = this.handleFetch.bind(this);
  }

  // Botón Reset

  handleReset() {
    this.setState({
      palette: "1",
      name: "",
      job: "",
      photo: "",
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
      ...this.state,
      phone: phone.match(/^[0-9]{9}/),
      email: email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
    };

    if (
      newState.name &&
      newState.job &&
      newState.photo &&
      newState.phone &&
      newState.email &&
      newState.linkedin &&
      newState.github
    ) {
      this.setState({
        isFormValid: true
      });
    } else {
      this.setState({
        isFormValid: false
      });
    }
  }

  // Manejo de inputs, paletas e imagen

  handleInput(data) {
    const name = data.inputName;
    const value = data.inputValue;
    this.setState({ [name]: value }, () => {
      this.validateForm();
    });
  }

  // Collapsible container

  // Local Storage

  componentDidUpdate() {
    localStorage.set("userData", this.state);
  }

  // Fetch
  createFetchCard(data) {
    fetch("https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(result => {
        if (result.success) {
          this.setState({
            url: result.cardURL,
            cardSuccess: true,
            isLoading: false
          });
        } else {
          this.setState({
            cardURL: "ERROR:" + result.error,
            isLoading: false
          });
        }
      })
      .catch(error => console.log(error));
  }
  handleFetch() {
    this.createFetchCard(this.state);
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Header />

        <main className="cards">
          <Card
            info={this.state}
            photo={this.state.photo}
            handleReset={this.handleReset}
          />
          <CollapsibleContainer
            handleInput={this.handleInput}
            info={this.state}
            photo={this.state.photo}
            isFormValid={this.state.isFormValid}
            createFetchCard={this.handleFetch}
            //
            url={this.state.url}
            cardSuccess={this.state.cardSuccess}
            isLoading={this.state.isLoading}
          />
        </main>

        <Footer />
      </div>
    );
  }
}

export default Main;
