import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class DMScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Direct'
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Direct Messages</Text>
      </View>
    );
  }
}

export default DMScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});
