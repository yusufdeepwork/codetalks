import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import FloatingButton from '../components/FloatingButton';
import ContentInputModal from '../components/ContentInputModal';
import MessageCard from '../components/MessageCard';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import parseMessageData from '../utils/parseMessageData';

const Room = ({route}) => {
  const [isClose, setIsClose] = useState(false);
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    database()
      .ref(`/rooms/${route.params.roomName}/messages/`)
      .on('value', snapshot => {
        setMessageList(parseMessageData(snapshot.val()));
      });
  }, []);

  const handleSend = message => {
    const newReference = database()
      .ref(`/rooms/${route.params.roomName}/messages`)
      .push();
    newReference
      .set({
        author: auth().currentUser.email.split('@')[0],
        content: message,
        date: new Date().toISOString(),
      })
      .then(() => {});
    toggleClose();
  };
  const toggleClose = () => {
    setIsClose(!isClose);
  };

  const renderMessage = ({item}) => <MessageCard message={item} />;

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
        data={messageList}
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
