import React, { Component } from "react";
import { AppRegistry } from "react-native";

import App from './routes';

export default class GithubApp extends Component {
  render() {
    return <App />;
  }
}

AppRegistry.registerComponent("GithubApp", () => GithubApp);
