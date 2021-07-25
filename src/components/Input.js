import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const Input = ({text, isSecure, value, onChangeText, grayText}) => {
  return (
    <TextInput
      onChangeText={onChangeText}
      value={value}
      placeholder={text}
      style={grayText ? [styles.input, styles.gray] : styles.input}
      placeholderTextColor={grayText ? '#9c9c9c' : 'white'}
      secureTextEntry={isSecure}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    padding: 10,
    color: 'white',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    margin: 10,
    textDecorationLine: 'none',
  },
  gray: {
    color: 'black',
  },
});
