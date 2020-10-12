import React, { Component } from "react";
import Navbar from "./components/navbar";
import Content from "./components/simplecontrol";
import { host } from "./utils";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <main>
        {!host ? (
          <h1 style={{ textAlign: "center", marginTop: "5em" }}>
            {" "}
            Please define REACT_APP_API_HOSTNAME Environment Variable{" "}
          </h1>
        ) : (
          <div>
            <Navbar />
            <Content />
          </div>
        )}
      </main>
    );
  }
}

export default App;
