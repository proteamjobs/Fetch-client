import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class LogInScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>아직 계정이 없나요?</Text>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('SignUp');
          }}
        >
          <Text>회원가입</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default LogInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});
