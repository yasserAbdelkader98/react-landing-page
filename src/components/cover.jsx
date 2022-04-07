import React, { Component } from "react";
import "../styles/style.css";

class Cover extends Component {
  state = {};
  render() {
    return (
      <div className="cover">
        <h1>My Name</h1>
        <h4>FullStack developer</h4>
        <button className="btn btn-dark">Contact Me</button>
      </div>
    );
  }
}

export default Cover;
