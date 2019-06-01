import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Image } from "react-native";
import {
  createStackNavigator,
  // createBottomTabNavigator,
  createMaterialTopTabNavigator,
  createAppContainer
} from "react-navigation";
import MainScreen from "./src/screens/MainScreen";
import DMScreen from "./src/screens/DMScreen";
import OrderScreen from "./src/screens/OrderScreen";
import NoticeScreen from "./src/screens/NoticeScreen";
import MypageScreen from "./src/screens/MypageScreen";
import Icon from "react-native-vector-icons/FontAwesome";

class App extends Component {
  render() {
    return <AppContainer />;
  }
}

const AppStactNavigator = createStackNavigator({
  Main: {
    screen: MainScreen
  },
  DMs: {
    screen: DMScreen
  }
});

const AppTapNavigator = createMaterialTopTabNavigator(
  {
    Home: {
      screen: AppStactNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" size={20} color={tintColor} />
        )
      }
    },
    Order: {
      screen: OrderScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="tags" size={20} color={tintColor} />
        )
      }
    },
    Notice: {
      screen: NoticeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="bell" size={20} color={tintColor} />
        )
      }
    },
    Mypage: {
      screen: MypageScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="smile-o" size={20} color={tintColor} />
        )
      }
    }
  },
  {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
      style: {
        ...Platform.select({
          ios: {
            backgroundColor: "white"
          },
          android: {
            backgroundColor: "white"
          }
        })
      },
      iconStyle: { height: 35 },
      activeTintColor: "#5bb487",
      inactiveTintColor: "#d1cece",
      upperCaseLabel: false,
      showLabel: true,
      showIcon: true
    }
  }
);

const AppContainer = createAppContainer(AppTapNavigator);
