import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {formatDistance, parseISO, subDays} from 'date-fns';
import {tr} from 'date-fns/locale';

const MessageCard = ({message}) => {
  const formattedData = formatDistance(parseISO(message.date), new Date(), {
    addSuffix: true,
    locale: tr,
  });

  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <Text style={styles.title}>{message.author}</Text>
        <Text style={styles.date}>{formattedData}</Text>
      </View>
      <Text style={styles.content}>{message.content}</Text>
    </View>
  );
};

export default MessageCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  header_container: {
    justifyContent: 'space-between',
    flex: 1,
    flexDirection: 'row',
  },
  content: {
    fontWeight: 'bold',
    paddingVertical: 5,
  },
  title: {
    color: '#3e4546',
  },
  date: {
    fontStyle: 'italic',
    color: '#3e4546',
  },
});
