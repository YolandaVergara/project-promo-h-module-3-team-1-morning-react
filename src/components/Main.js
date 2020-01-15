import React from "react";
import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";
import CollapsibleContainer from "./CollapsibleContainer";
import localStorage from "../localStorage/localStorage";
import createFetchCard from "../services/createFetchCard";

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
      URL: "",
      isLoading: false,
      cardSuccess: ""
    });

    this.state = localStorageData;
    this.handleInput = this.handleInput.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.createFetchCard = this.createFetchCard.bind(this);
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

  // Local Storage

  componentDidUpdate() {
    localStorage.set("userData", this.state);
  }

  // Fetch

  showURL(result) {
    console.log(result);
  }

  createFetchCard(data) {
    console.log(data);

    const getData = createFetchCard(this.state);
    console.log(getData);

    this.setState({
      URL: getData
    });
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
            createFetchCard={this.createFetchCard}
            //
            URL={this.state.URL}
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
