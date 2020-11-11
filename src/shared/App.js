import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Home, Notice, Restaurant, Result } from "../pages";
import {} from "../styles/common.scss";
import Navigation from "../component/Navigation";

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/notice" component={Notice} />
        <Route path="/restaurant" component={Restaurant} />
        <Route path="/result" component={Result} />
      </div>
    );
  }
}

export default App;
