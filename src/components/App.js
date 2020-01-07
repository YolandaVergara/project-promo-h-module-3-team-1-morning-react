import React from "react";
import "../stylesheets/App.scss";
import "../stylesheets/layout/design.scss";
import "../stylesheets/layout/fill.scss";
import "../stylesheets/layout/share.scss";
import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";
import CollapsibleContainer from "./CollapsibleContainer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      job: "",
      file: "",
      phone: "",
      email: "",
      linkedin: "",
      github: ""
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleImage = this.handleImage.bind(this);
  }

  handleInput(data) {
    const name = data.inputName;
    const value = data.inputValue;

    if (value !== "") {
      this.setState({
        [name]: value
      });
    }
  }

  handleImage(file) {
    console.log(file);
    this.setState({
      file: file
    });
  }

  render() {
    return (
      <div className="App">
        <Header />

        <main className="cards">
          <Card info={this.state} file={this.state.file} />
          <CollapsibleContainer
            handleInput={this.handleInput}
            handleImage={this.handleImage}
            file={this.state.file}
          />
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
