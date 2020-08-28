import React from "react";
import logo from "./logo.svg";
import "./App.css";

import AppCoordinator from "./AppCoordinator";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <AppCoordinator />
    </div>
  );
}

export default App;
