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
  }

  handleInput(data) {
    const name = data.inputName;
    const value = data.inputValue;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="App">
        <Header />

        <main className="cards">
          <Card info={this.state} file={this.state.file} iconClassFilter={this.state.iconClassFilter} iconClass={this.state.iconClass} />
          <CollapsibleContainer
            handleInput={this.handleInput}
            file={this.state.file}
          />
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
