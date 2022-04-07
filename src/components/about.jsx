import React, { Component } from "react";
import "../styles/style.css";

class About extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="d-flex col-12">
          <div className="col-3">
            <h2> About Me</h2>
          </div>
          <div className="details col-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
            facilis rerum dolorem, optio voluptas officiis nostrum dolore
            tempora! Obcaecati illo ullam repudiandae nesciunt veritatis?
            Accusamus totam enim officia quaerat deserunt? Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Quibusdam aperiam, ratione non
            quisquam quo explicabo, possimus quis earum, ipsam quidem voluptates
            eos at itaque mollitia saepe voluptatem odio nemo nesciunt?
            <br />{" "}
            <button className="btn btn-dark my-4">Download Resume</button>
          </div>
        </div>
      </>
    );
  }
}

export default About;
