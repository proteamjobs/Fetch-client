/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import MainScreen from './src/screens/MainScreen';
import DMScreen from './src/screens/DMScreen';
// import { Provider } from 'react-redux';
// import { store } from './src/store';

// type Props = {};
export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
const AppStactNavigator = createStackNavigator({
  Main: {
    screen: MainScreen
  },
  // MyPage: {
  //   screen: MypageScreen
  // },
  DMs: {
    screen: DMScreen
  }
});

const AppContainer = createAppContainer(AppStactNavigator);
