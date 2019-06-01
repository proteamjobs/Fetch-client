import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class MypageScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Mypage'
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Mypage here</Text>
      </View>
    );
  }
}

export default MypageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});
