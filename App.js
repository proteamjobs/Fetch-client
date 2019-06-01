/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {
  createStackNavigator,
  createMaterialTopTabNavigator,
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';
import MainScreen from './src/screens/MainScreen';
import DMScreen from './src/screens/DMScreen';
import OrderScreen from './src/screens/OrderScreen';
import NoticeScreen from './src/screens/NoticeScreen';
import MypageScreen from './src/screens/MypageScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
// import { Provider } from 'react-redux';
// import store from './src/store';

// type Props = {};
export default class App extends Component {
  constructor(props) {
    super(props);
    userToken = this._bootstrapAsync();
  }
  _bootstrapAsync = async () => {
    return await AsyncStorage.getItem('userToken');
  };
  render() {
    return (
      // <Provider store={store}>
      <AppContainer />
      // </Provider>
    );
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
const AppAuthSwitchNavigator = createSwitchNavigator({
  LogIn: {
    screen: LoginScreen
  },
  SignUp: {
    screen: SignUpScreen
  },
  Mypage: {
    screen: MypageScreen
  },
  initialRouteName: this.userToken ? 'Mypage' : 'LogIn'
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
      screen: AppAuthSwitchNavigator,
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
    tabBarPosition: 'bottom',
    tabBarOptions: {
      style: {
        ...Platform.select({
          ios: {
            backgroundColor: 'white'
          },
          android: {
            backgroundColor: 'white'
          }
        })
      },
      iconStyle: { height: 35 },
      activeTintColor: '#5bb487',
      inactiveTintColor: '#d1cece',
      upperCaseLabel: false,
      showLabel: true,
      showIcon: true
    }
  }
);

const AppContainer = createAppContainer(AppTapNavigator);
