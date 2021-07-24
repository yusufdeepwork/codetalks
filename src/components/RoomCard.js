import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const RoomCard = ({room}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.category}>{room}</Text>
    </TouchableOpacity>
  );
};

export default RoomCard;

const styles = StyleSheet.create({
  container: {
    height: 200,
    borderWidth: 0.25,
    borderColor: '#b4b4b4',
    borderRadius: 10,
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  category: {
    fontSize: 50,
    color: '#fe9f41',
  },
});
