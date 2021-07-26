import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import FloatingButton from '../components/FloatingButton';
import ContentInputModal from '../components/ContentInputModal';
import MessageCard from '../components/MessageCard';

const Room = ({route}) => {
  const [isClose, setIsClose] = useState(false);

  const handleSend = message => {
    console.log(message);
    toggleClose();
  };
  const toggleClose = () => {
    setIsClose(!isClose);
  };

  const renderMessage = ({item}) => <MessageCard />;

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
      <FlatList
        data={['1', '1', '1', '1', '1', '2', '2', '3']}
        renderItem={renderMessage}
        keyExtractor={(item, index) => index}
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
