import React from "react";

import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";
import CollapsibleContainer from "./CollapsibleContainer";


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            paletteChecked: 1,
            name: "",
            job: "",
            file: "",
            phone: "",
            email: "",
            linkedin: "",
            github: ""
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleReset() {
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
            [name]: value
        });
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
                        file={this.state.file}
                        paletteChecked={this.state.paletteChecked}

                    />
                </main>

                <Footer />
            </div>
        );
    }
}

export default Main;
