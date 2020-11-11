import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Home, Notice, Restaurant } from "../pages";
import {} from "../styles/common.scss";
import Navigation from "../component/Navigation";

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route path="/notice" component={Notice} />
        <Route path="/restaurant" component={Restaurant} />
      </div>
    );
  }
}

export default App;
