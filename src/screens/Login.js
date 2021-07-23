import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Input from '../components/Input';

const Login = () => {
  return (
    <View style={styles.container}>
      <Text>Code Talks</Text>
      <Input text="e-postanızı giriniz" />
      <Input text="şifrenizi giriniz" isSecure />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fb6c04',
    flex: 1,
  },
});
