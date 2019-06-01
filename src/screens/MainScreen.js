import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class MainScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'fetch',
      headerRight: (
        <Icon.Button
          name="comment"
          backgroundColor="#fff"
          color="#5bb487"
          style={{ paddingRight: 10 }}
          onPress={() => {
            navigation.navigate('DMs');
          }}
        />
      )
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Main here</Text>
      </View>
    );
  }
}

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});
