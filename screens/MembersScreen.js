import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const membersData = [
  { id: '1', name: 'Imaran', phone: '+93 968665567', joinDate: '12-Mar-24' },
  { id: '2', name: 'Jabird', phone: '+93 700112233', joinDate: '10-Mar-24' },
  // Add more members as needed
];

const MembersScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.memberItem}>
      <Text style={styles.memberName}>{item.name}</Text>
      <Text style={styles.memberPhone}>{item.phone}</Text>
      <Text style={styles.memberDate}>Joined: {item.joinDate}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Members</Text>
      <FlatList
        data={membersData}
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
  memberItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
  },
  memberName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  memberPhone: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  memberDate: {
    fontSize: 12,
    color: '#999',
  },
});

export default MembersScreen;