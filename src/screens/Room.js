import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Room = ({route}) => {
  return (
    <View>
      <Text>{`${route.params.roomName} odası kuruldu`}</Text>
    </View>
  );
};

export default Room;

const styles = StyleSheet.create({});
