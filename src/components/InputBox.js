import React from 'react';
import { TextInput, View, Text } from 'react-native';

const InputBox = ({
  // value,
  // onChangeText,
  placeholder,
  secureTextEntry
}) => {
  const { inputStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <TextInput
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        secureTextEntry={secureTextEntry}
        // value={value}
        // onChangeText={onChangeText}
      />
    </View>
  );
};
export default InputBox;

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 15,
    lineHeight: 20,
    width: '80%'
    // backgroundColor: 'black'
    // flex: 2
  },
  containerStyle: {
    height: 40,
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start'
  }
};
