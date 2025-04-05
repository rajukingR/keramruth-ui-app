import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const historyData = [
  { id: '1', name: 'Avyaan', code: 'M156387', phone: '+91 98586558xx', bookDate: '15-Jul-24', receiveDate: '19-Jul-24', product1: 'Virgin Coconut Oil', details1: '200 ml x 2 | 500 ml x 2 | 1 L x 2 | 5 L x 2', product2: 'Virgin Coconut Hair Oil', details2: '100 ml x 2', image: 'https://randomuser.me/api/portraits/men/1.jpg' },
  { id: '2', name: 'Aarav', code: 'C156387', phone: '+91 98586558xx', bookDate: '13-Jul-24', receiveDate: '15-Jul-24', product1: 'Virgin Coconut Oil', details1: '200 ml x 1 | 500 ml x 1 | 5 L x 2', product2: 'Virgin Coconut Hair Oil', details2: '100 ml x 2', image: 'https://randomuser.me/api/portraits/men/2.jpg' },
  { id: '3', name: 'Kabir', code: 'D156387', phone: '+91 98586558xx', bookDate: '12-Jul-24', receiveDate: '14-Jul-24', product1: 'Virgin Coconut Oil', details1: '200 ml x 1 | 500 ml x 1 | 5 L x 2', product2: 'Virgin Coconut Hair Oil', details2: '100 ml x 2', image: 'https://randomuser.me/api/portraits/men/3.jpg' },
  { id: '4', name: 'Kiara', code: 'S156387', phone: '+91 98586558xx', bookDate: '12-Jul-24', receiveDate: '15-Jul-24', product1: 'Virgin Coconut Oil', details1: '200 ml x 1 | 5 L x 2', product2: 'Virgin Coconut Hair Oil', details2: '100 ml x 2', image: 'https://randomuser.me/api/portraits/women/1.jpg' },
  { id: '5', name: 'Avyaan', code: 'S156387', phone: '+91 98586558xx', bookDate: '10-Jun-24', receiveDate: '12-Jun-24', product1: 'Virgin Coconut Oil', details1: '200 ml x 1 | 500 ml x 2 | 5 L x 2', product2: 'Virgin Coconut Hair Oil', details2: '100 ml x 2', image: 'https://randomuser.me/api/portraits/men/4.jpg' }
];

const HistoryScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.historyItem}>
      <View style={styles.row}>
        <View style={styles.profileSection}>
          <Image source={{ uri: item.image }} style={styles.profileImage} />
          <View>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.code}>{item.code}</Text>
          </View>
        </View>
        <View style={styles.dateSection}>
          <Text style={styles.bookDate}>{item.bookDate} Booked</Text>
          <Text style={styles.receiveDate}>{item.receiveDate} Received</Text>
        </View>
      </View>
      <View style={styles.centeredProduct}>
        <Text style={styles.product}>{item.product1}</Text>
        <Text style={styles.details}>{item.details1}</Text>
      </View>
      {item.product2 ? (
        <View style={styles.centeredProduct}>
          <Text style={styles.product}>{item.product2}</Text>
          <Text style={styles.details}>{item.details2}</Text>
        </View>
      ) : null}
    </View>
  );

  const Header = () => (
    <View style={styles.headerContainer}>
      <Text style={styles.header}>This Month</Text>
      <TouchableOpacity style={styles.filterButton}>
        <Ionicons name="filter" size={20} color="#007bff" />
        <Text style={styles.filterText}>Filter</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={historyData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        ListHeaderComponent={<Header />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  header: {
    fontSize: 14,
    fontWeight: '300', // 'light' is not a valid value, use '300' instead
    color: '#212121',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterText: {
    marginLeft: 8,
    color: '#007bff',
    fontSize: 16,
  },
  historyItem: {
    backgroundColor: '#ECF5FD',
    borderRadius: 16,
    padding: 12,
    marginBottom: 8,
    height: 170,
    marginHorizontal: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  code: {
    fontSize: 14,
    color: '#007bff',
  },
  dateSection: {
    alignItems: 'flex-end',
  },
  bookDate: {
    fontSize: 14,
    color: '#666',
  },
  receiveDate: {
    fontSize: 14,
    color: '#666',
  },
  centeredProduct: {
    alignItems: 'center',
    marginTop: 4,
  },
  product: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  details: {
    fontSize: 14,
    color: '#666',
  },
  listContainer: {
    paddingBottom: 16,
  },
});

export default HistoryScreen;