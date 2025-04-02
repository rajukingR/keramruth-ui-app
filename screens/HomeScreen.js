import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const historyData = [
  { id: '1', date: '12-Mar-24', activity: 'New member added', details: 'Imaran' },
  { id: '2', date: '10-Mar-24', activity: 'Target updated', details: '85% completed' },
  // Add more history items as needed
];

const HistoryScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.historyItem}>
      <Text style={styles.historyDate}>{item.date}</Text>
      <Text style={styles.historyActivity}>{item.activity}</Text>
      <Text style={styles.historyDetails}>{item.details}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>History</Text>
      <FlatList
        data={historyData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  listContainer: {
    paddingBottom: 16,
  },
  historyItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
  },
  historyDate: {
    fontSize: 12,
    color: '#999',
    marginBottom: 4,
  },
  historyActivity: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  historyDetails: {
    fontSize: 14,
    color: '#666',
  },
});

export default HistoryScreen;