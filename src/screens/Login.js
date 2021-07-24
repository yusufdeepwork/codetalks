import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';

const Login = ({navigation}) => {
  const [isProcessing, setIsProcessing] = useState(false);

  function handleLogin(values) {
    setIsProcessing(true);
    auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then(() => {
        setIsProcessing(false);
      })
      .catch(error => {
        console.log(error.code);
        setIsProcessing(false);
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.title}>codetalks</Text>
      </View>
      <View style={styles.input_container}>
        <Formik
          initialValues={{email: '', password: ''}}
          onSubmit={handleLogin}>
          {({handleChange, handleSubmit, values}) => (
            <>
              <Input
                onChangeText={handleChange('email')}
                value={values.email}
                text="e-postanızı giriniz"
              />
              <Input
                onChangeText={handleChange('password')}
                value={values.password}
                text="şifrenizi giriniz"
                isSecure
              />
              <Button
                title="Giriş Yap"
                disabled={isProcessing || !values.password || !values.email}
                onPress={handleSubmit}
              />
            </>
          )}
        </Formik>
        <Button
          title="Kayıt Ol"
          light
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
};

export default Login;

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
