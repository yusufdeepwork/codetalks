/**
 * Sample React Native Router
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';
import {HeaderBackButton} from '@react-navigation/stack';

import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Home from './screens/Home';
import Room from './screens/Room';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {TouchableOpacity} from 'react-native';
const Stack = createStackNavigator();

const HomeStack = () => {
  const logout = () => {
    auth().signOut();
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: 'Odalar',
          headerTitleStyle: {color: '#f9a144'},
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Room"
        component={Room}
        options={({route}) => ({
          title: route.params.roomName,
          headerTitleStyle: {color: '#f9a144'},
          headerTitleAlign: 'center',
          headerLeft: props => (
            <HeaderBackButton
              {...props}
              tintColor={'#f9a144'}
              label={() => route.params.roomName}
            />
          ),
          headerRight: props => (
            <TouchableOpacity onPress={logout}>
              <Icon
                name="sign-out-alt"
                color={'#f9a144'}
                size={25}
                style={{marginRight: 10}}
              />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const Router = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      setIsLogin(!!user);
    });
  }, []);

  return (
    <NavigationContainer>
      {isLogin ? (
        <HomeStack />
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Router;
