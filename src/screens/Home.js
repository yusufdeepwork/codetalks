import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import RoomCard from '../components/RoomCard';
import FloatingButton from '../components/FloatingButton';

const Home = () => {
  const renderRoom = ({item}) => <RoomCard room={item} />;
  return (
    <View style={styles.container}>
      <FlatList
        data={['Python', 'Unity', 'react', 'vue', 'java', 'typescriptadfas']}
        renderItem={renderRoom}
        keyExtractor={(item, index) => index}
        numColumns={2}
      />
      <FloatingButton />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    borderTopWidth: 0.5,
    borderTopColor: '#b4b4b4',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
});
