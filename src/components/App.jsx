import React, { Component } from "react";

import Cover from "./cover";
import About from "./about";
import Skills from "./skills";
import Portofolio from "./portofolio";
import Footer from "./footer";

import "bootstrap/dist/css/bootstrap.css";

import "font-awesome/css/font-awesome.css";
import "font-awesome/css/font-awesome.css.map";
import "font-awesome/css/font-awesome.min.css";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Cover />
        <About />
        <Skills />
        <Portofolio />
        <Footer />
      </>
    );
  }
}

export default App;
