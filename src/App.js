import React, { Component } from 'react';
import './assets/style/index.css';

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";


class App extends Component {
  render() {
    return (
      <div className="app_container flex_c">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
