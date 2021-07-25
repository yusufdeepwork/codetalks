import React, {useState} from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import Modal from 'react-native-modal';
import Button from './Button';
import Input from './Input';

const ContentInputModal = ({visible, onClose, onSend}) => {
  const [content, setContent] = useState(null);
  return (
    <Modal
      style={styles.modal}
      isVisible={visible}
      swipeDirection="down"
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <View style={styles.container}>
        <View style={styles.inline_container}>
          <Input
            value={content}
            onChangeText={setContent}
            grayText
            text="Oda adı..."
          />
        </View>
        <Button onPress={() => onSend(content)} title="Ekle" />
      </View>
    </Modal>
  );
};

export default ContentInputModal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    height: Dimensions.get('window').height / 3,
    justifyContent: 'flex-end',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  modal: {
    justifyContent: 'flex-end',
    marginVertical: 0,
  },
  inline_container: {
    flex: 1,
  },
});