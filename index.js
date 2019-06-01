import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import React from "react";
import { Provider } from "react-redux";
import store from "./src/store";
console.log(store.getState());

const AppConatiner = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => AppConatiner);
