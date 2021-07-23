import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.title}>codetalks</Text>
      </View>
      <View style={styles.input_container}>
        <Input text="e-postanızı giriniz" />
        <Input text="şifrenizi giriniz" isSecure />
        <Input text="şifrenizi tekrar giriniz" isSecure />

        <Button title="Kayıt Ol" />
        <Button title="Geri" light onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fb6c04',
    flex: 1,
    justifyContent: 'center',
  },
  title_container: {
    flex: 4,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  input_container: {
    flex: 5,
  },
  title: {
    fontSize: 30,
    color: 'white',
  },
});
