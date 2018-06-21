import React, { Component } from 'react';
import './App.css';

import Navbar from '../src/components/navbar/Navbar'
import Banner from '../src/components/banner/Banner'
import Card from "../src/components/cards/Card";
import Form from "../src/components/form/Form";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar/>
        <Banner/>
        <Card/>
        <Form/>
      </div>
    );
  }
}

export default App;
