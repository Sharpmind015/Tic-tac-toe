import React, { Component } from "react";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="x">Tic</h1>
        <h1 className="o">Tac</h1>
        <h1 className="x">Toe</h1>
        <Link to="/game" className="button button--2">
          Start game
        </Link>
        <a
          href="https://github.com/Sharpmind015/Tic-tac-toe.git"
          className="code"
        >
          Code{" "}
        </a>
      </div>
    );
  }
}

export default App;
