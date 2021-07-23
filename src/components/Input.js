import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const Input = ({text, isSecure, value, onChangeText}) => {
  return (
    <TextInput
      onChangeText={onChangeText}
      value={value}
      placeholder={text}
      style={styles.input}
      placeholderTextColor={'white'}
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
});
