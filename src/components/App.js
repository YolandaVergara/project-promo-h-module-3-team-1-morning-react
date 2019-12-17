import React from "react";

import "../stylesheets/App.scss";
import Header from "./Header";
import Card from "./Card";
import Form from "./Form";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Card />
      <Form />  
      <Footer />
    </div>
  );
}

export default App;
