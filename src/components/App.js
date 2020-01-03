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
      value: ""
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(data) {
    console.log(data);

    /* this.setState = {
      value: ev.target.value
    }; */
  }

  render() {
    return (
      <div className="App">
        <Header />

        <main className="cards">
          <Card />
          <CollapsibleContainer handleInput={this.handleInput} />
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
