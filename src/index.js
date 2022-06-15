import React from "react";
import ReactDOM from "react-dom";
import "./styles/style.css";

// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
// import $ from "jquery";
// import Popper from "popper.js";
// import "bootstrap/dist/js/bootstrap";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <div style={{ direction: "rtl" }}>
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
