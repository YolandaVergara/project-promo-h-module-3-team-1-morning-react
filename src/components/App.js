import React from "react";

import "../stylesheets/App.scss";
import "../stylesheets/layout/design.scss";
import "../stylesheets/layout/fill.scss";
import "../stylesheets/layout/share.scss";

import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";
import CollapsibleContainer from "./CollapsibleContainer";

function App() {
  return (
    <div className="App">
      <Header />

      <main className="cards">
        <Card />
        <CollapsibleContainer />
      </main>

      <Footer />
    </div>
  );
}

export default App;
