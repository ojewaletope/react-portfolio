import React, { Component } from 'react';
import './App.css';

import Navbar from '../src/components/navbar/Navbar'
import Banner from '../src/components/banner/Banner'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar/>
        <Banner/>
      </div>
    );
  }
}

export default App;
