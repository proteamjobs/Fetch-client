import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import InputBox from '../components/InputBox';
// import Card from '../components/Card';
class LogInScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>로그인</Text>
        </View>
        <View style={{ paddingTop: 10, alignItems: 'center' }}>
          <InputBox placeholder={'이메일'} />
          <InputBox placeholder={'비밀번호'} secureTextEntry={true} />
        </View>
        <View>
          <Text>아직 계정이 없나요?</Text>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('SignUp');
            }}
          >
            <Text>회원가입</Text>
          </TouchableOpacity>
        </View>
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
  },
  title: {
    fontSize: 30
  }
});
