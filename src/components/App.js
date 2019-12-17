import React from "react";

import "../stylesheets/App.scss";
import Header from "./Header";
import Form from "./Form";
import Card from "./Card";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
