import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home, About, Services } from "./components/pages";
import "./style.css";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
      </Switch>
    </Router>
  );
}
