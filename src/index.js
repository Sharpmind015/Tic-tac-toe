import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import Game from "./Game";
import "./index.css";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/game" exact component={Game} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
