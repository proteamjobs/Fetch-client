import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class NoticeScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Notices'
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Notice here</Text>
      </View>
    );
  }
}

export default NoticeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});
