import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native';

function Button({title, onPress, light, disabled}) {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={light ? [styles.button, styles.lightButton] : styles.button}
      onPress={onPress}>
      <Text style={light ? [styles.title, styles.lightTitle] : styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
export default Button;

const styles = StyleSheet.create({
  button: {
    margin: 10,
    backgroundColor: '#fea040',
    borderRadius: 8,
  },
  title: {
    padding: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 17,
    color: '#ffffff',
  },
  lightButton: {
    backgroundColor: '#ffffff',
  },
  lightTitle: {
    color: '#fea040',
  },
});
