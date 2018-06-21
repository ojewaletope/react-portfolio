import React, { Component } from "react";
import "./App.css";

import Navbar from "../src/components/navbar/Navbar";
import Banner from "../src/components/banner/Banner";
import Card from "../src/components/cards/Card";
import Form from "../src/components/form/Form";
import Footer from "../src/components/footer/Footer";
import cardObj from "../src/cardObj";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <Banner />
        <div className="card__container">
          <Card cardObj={cardObj} />
        </div>
        <Form />
        <Footer />
      </div>
    );
  }
}

export default App;
