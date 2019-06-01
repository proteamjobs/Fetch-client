import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class OrderScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Order'
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Orders here</Text>
      </View>
    );
  }
}

export default OrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});
