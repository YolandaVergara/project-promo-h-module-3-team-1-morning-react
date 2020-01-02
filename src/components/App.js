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
      file: ""
    }
    this.handleImage = this.handleImage.bind(this);
  }

  handleImage(file) {
    console.log(file)
    this.setState(
      {
        file: file
      }
    );

  }

  render() {
    return (
      <div className="App" >
        <Header />

        <main className="cards">
          <Card />
          <CollapsibleContainer handleImage={this.handleImage} />
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
