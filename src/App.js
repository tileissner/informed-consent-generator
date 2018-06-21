import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import rating from "./rating.png";

import { Panel, PanelGroup, Accordion } from "react-bootstrap";
import { Button, ButtonToolbar } from "react-bootstrap";
import { Radio, Checkbox } from "react-bootstrap";
import { Grid, Row, Col, Image } from "react-bootstrap";
import { Glyphicon } from "react-bootstrap";
import { ConsentForm } from "./ConsentForm";

// function multiplyNode(node, count, deep) {
//   for (var i = 0, copy; i < count - 1; i++) {
//       copy = node.cloneNode(deep);
//       node.parentNode.insertBefore(copy, node);
//   }
// }

// multiplyNode(document.querySelector('.box'), 5, true);

// var cloneGrid = document.getElementById("grid-container");
// var dup_cloneGrid = cloneGrid.cloneNode(true);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <ConsentForm />
      </div>
    );
  }
}

export default App;
