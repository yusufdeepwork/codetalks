import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import RoomCard from '../components/RoomCard';
import FloatingButton from '../components/FloatingButton';
import ContentInputModal from '../components/ContentInputModal';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleRoomInput = content => {
    console.log(content);
  };

  const toggleContent = () => setIsOpen(!isOpen);

  const renderRoom = ({item}) => <RoomCard room={item} />;
  return (
    <View style={styles.container}>
      <FlatList
        data={['Python', 'Unity', 'react', 'vue', 'java', 'typescriptadfas']}
        renderItem={renderRoom}
        keyExtractor={(item, index) => index}
        numColumns={2}
      />
      <ContentInputModal
        onSend={handleRoomInput}
        visible={isOpen}
        onClose={toggleContent}
      />
      <FloatingButton onPress={toggleContent} iconType="plus" />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderTopWidth: 0.5,
    borderTopColor: '#b4b4b4',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
});
