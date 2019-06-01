import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class SignUpScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>이미 계정이 있나요?</Text>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('LogIn');
          }}
        >
          <Text>로그인</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});
