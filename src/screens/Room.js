import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FloatingButton from '../components/FloatingButton';
import ContentInputModal from '../components/ContentInputModal';

const Room = ({route}) => {
  const [isClose, setIsClose] = useState(false);

  const handleSend = message => {
    console.log(message);
    toggleClose();
  };
  const toggleClose = () => {
    setIsClose(!isClose);
  };

  return (
    <View style={styles.container}>
      <Text
        style={
          styles.notification
        }>{`${route.params.roomName} odası kuruldu`}</Text>
      <ContentInputModal
        placeholder={'Mesajın...'}
        onSend={handleSend}
        onClose={toggleClose}
        visible={isClose}
      />
      <FloatingButton onPress={toggleClose} iconType="plus" />
    </View>
  );
};

export default Room;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffb64d',
    flex: 1,
  },
  notification: {
    color: 'white',
    borderStyle: 'dotted',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 10,
    borderColor: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});
