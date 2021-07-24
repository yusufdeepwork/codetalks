import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const FloatingButton = ({iconType}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Icon name={iconType} size={20} style={styles.icon} />
    </TouchableOpacity>
  );
};

export default FloatingButton;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    backgroundColor: '#fea040',
    padding: 20,
    borderRadius: 50,
  },
  icon: {
    color: 'white',
  },
});
