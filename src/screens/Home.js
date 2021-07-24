import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import auth from '@react-native-firebase/auth';
const Home = () => {
  const logout = () => {
    auth().signOut().then(console.log('sign out'));
  };

  return (
    <View>
      <Text>Home</Text>
      <Button title="Signout" onPress={logout} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
