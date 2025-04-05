import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const membersData = [
  { id: '1', name: 'Abhimanyu', phone: '+91 98586558xx', joinDate: '15-Mar-24', code: 'D54985', image: 'https://randomuser.me/api/portraits/men/1.jpg' },
  { id: '2', name: 'Imaran', phone: '+91 98586558xx', joinDate: '12-Mar-24', code: 'D156387', image: 'https://randomuser.me/api/portraits/men/2.jpg' },
  { id: '3', name: 'Divya', phone: '+91 98586558xx', joinDate: '12-Mar-24', code: 'D156342', image: 'https://randomuser.me/api/portraits/women/3.jpg' },
  { id: '4', name: 'Kabir', phone: '+91 98586558xx', joinDate: '12-Mar-24', code: 'D156542', image: 'https://randomuser.me/api/portraits/men/4.jpg' },
  { id: '5', name: 'Aarav', phone: '+91 98586558xx', joinDate: '13-Mar-24', code: 'D18587', image: 'https://randomuser.me/api/portraits/men/5.jpg' },
  { id: '6', name: 'Jason', phone: '+91 98586558xx', joinDate: '15-Mar-24', code: 'C54985', image: 'https://randomuser.me/api/portraits/men/6.jpg' },
  { id: '7', name: 'Avyaan', phone: '+91 98586558xx', joinDate: '01-Jul-24', code: 'C156387', image: 'https://randomuser.me/api/portraits/women/7.jpg' },
  { id: '8', name: 'Aarav', phone: '+91 98586558xx', joinDate: '01-Jul-24', code: 'C156387', image: 'https://randomuser.me/api/portraits/men/8.jpg' },
  { id: '9', name: 'Ayesha', phone: '+91 98586558xx', joinDate: '02-Jul-24', code: 'C156388', image: 'https://randomuser.me/api/portraits/women/9.jpg' },
  { id: '10', name: 'Ryan', phone: '+91 98586558xx', joinDate: '03-Jul-24', code: 'C156389', image: 'https://randomuser.me/api/portraits/men/10.jpg' }
];

const MembersScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.memberItem}>
      <View style={styles.memberInfo}>
        <Image source={{ uri: item.image }} style={styles.memberImage} />
        <View>
          <Text style={styles.memberName}>{item.name}</Text>
          <Text style={styles.memberCode}>{item.code}</Text>
        </View>
      </View>
      <View style={styles.memberDetails}>
        <Text style={styles.memberDate}>{item.joinDate} Joined</Text>
        <Text style={styles.memberPhone}>{item.phone}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
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
    backgroundColor: '#FFFF',
  },
  listContainer: {
    paddingBottom: 16,
  },
  memberItem: {
    backgroundColor: '#ECF5FD',
    borderRadius: 16,
    padding: 12,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 3,
  },
  memberInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  memberImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  memberName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  memberCode: {
    fontSize: 14,
    color: '#007bff',
  },
  memberDetails: {
    alignItems: 'flex-end',
  },
  memberDate: {
    fontSize: 14,
    color: '#666',
  },
  memberPhone: {
    fontSize: 16,
    color: '#007bff',
  },
});

export default MembersScreen;