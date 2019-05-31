import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class MainScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'fetch',
      headerRight: (
        <Button
          onPress={() => {
            navigation.navigate('DMs');
          }}
          title="DM"
        />
      )
    };
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>MainScreen</Text>
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
