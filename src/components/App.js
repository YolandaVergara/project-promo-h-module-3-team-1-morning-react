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
      name: ""
    };
    this.handleInput = this.handleInput.bind(this);
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

  render() {
    return (
      <div className="App">
        <Header />

        <main className="cards">
          <Card
            name={this.state.name}
            job={this.state.job}
            phone={this.state.phone}
            email={this.state.email}
            linkedin={this.state.linkedin}
            github={this.state.github}
          />
          <CollapsibleContainer handleInput={this.handleInput} />
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
