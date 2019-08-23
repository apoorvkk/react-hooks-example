import React, { Component } from "react";
import GreetingWithHooks from "./GreetingWithHooks";
import GreetingWithoutHooks from "./GreetingWithoutHooks";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <GreetingWithHooks />
        <GreetingWithoutHooks />
      </div>
    );
  }
}

export default App;
