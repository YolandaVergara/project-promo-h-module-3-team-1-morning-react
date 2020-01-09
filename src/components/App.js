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
    const LSData = localStorage.get("Data", {
      paletteChecked: 1,
      name: "",
      job: "",
      file: "",
      phone: "",
      email: "",
      linkedin: "",
      github: ""
    });
    this.state = LSData;
    this.handleInput = this.handleInput.bind(this);
    this.handlePalette = this.handlePalette.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  // componentDidUpdate() {
  //   localStorage.setItem('Data', JSON.stringify(this.state));
  // }

  // componentDidMount() {
  //   const cardLS = localStorage.getItem('card');
  //   if (cardLS) {
  //     this.setState({
  //        JSON.parse(cardLS)
  //     })
  //   };
  // }


  handleReset(ev) {
    ev.preventDefault();
    this.setState({
      paletteChecked: 1,
      name: "",
      job: "",
      file: "",
      phone: "",
      email: "",
      linkedin: "",
      github: ""
    });
  }

  handleInput(data) {
    const name = data.inputName;
    const value = data.inputValue;



    this.setState({
      [name]: value,

    });
  }

  handlePalette(paletteChecked) {
    this.setState({
      paletteChecked: paletteChecked
    })
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
            handlePalette={this.handlePalette}
            file={this.state.file}

          />
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
