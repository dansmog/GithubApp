import React, { Component } from "react";
import { AppRegistry } from "react-native";

import Welcome from "./welcome";
import Login from "./src/components/Login/Login";

export default class GithubApp extends Component {
  render() {
    return <Login />;
  }
}

AppRegistry.registerComponent("GithubApp", () => GithubApp);
