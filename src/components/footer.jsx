import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <>
        <div
          style={{ height: "80px", backgroundColor: "#555" }}
          className="d-flex justify-content-between text-light align-items-center"
        >
          <div className="p-2">
            <h5>Get in touch</h5>

            <i className="fa fa-facebook-official m-1" aria-hidden="true" />
            <i className="fa fa-linkedin-square m-1" aria-hidden="true" />
            <i className="fa fa-twitter m-1" aria-hidden="true" />
          </div>
          <div>
            <button className="btn btn-outline-light">Contact Me</button>
          </div>
          <div>
            <h5>CopyRight 2022</h5>
          </div>
        </div>
      </>
    );
  }
}

export default Footer;
