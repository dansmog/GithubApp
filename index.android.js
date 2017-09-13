import React, { Component } from "react";
import { AppRegistry } from "react-native";

import Welcome from "./welcome";

export default class GithubApp extends Component {
  render() {
    return <Welcome />;
  }
}

AppRegistry.registerComponent("GithubApp", () => GithubApp);
