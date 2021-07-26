import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import RoomCard from '../components/RoomCard';
import FloatingButton from '../components/FloatingButton';
import ContentInputModal from '../components/ContentInputModal';
import database from '@react-native-firebase/database';

const Home = ({navigation}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [roomList, setRoomList] = useState([]);

  const handleRoomInput = content => {
    database()
      .ref(`rooms/${content}`)
      .set({
        messages: '',
      })
      .then(() => {});
    toggleContent();
  };
  useEffect(() => {
    database()
      .ref('/rooms/')
      .on('value', snapshot => {
        snapshot.val() && setRoomList(Object.keys(snapshot.val()));
      });
  }, []);
  const toggleContent = () => setIsOpen(!isOpen);

  const navigateRoom = item => navigation.navigate('Room', {roomName: item});

  const renderRoom = ({item}) => (
    <RoomCard onPress={() => navigateRoom(item)} room={item} />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={roomList}
        renderItem={renderRoom}
        keyExtractor={(item, index) => index}
        numColumns={2}
      />
      <ContentInputModal
        onSend={handleRoomInput}
        visible={isOpen}
        onClose={toggleContent}
        placeholder={'Oda adı...'}
      />
      <FloatingButton onPress={toggleContent} iconType="plus" />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderTopWidth: 0.5,
    borderTopColor: '#b4b4b4',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
});
