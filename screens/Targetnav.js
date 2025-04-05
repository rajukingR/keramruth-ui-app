import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Targetnav = () => {
  return (
    <View style={styles.container}>
      {/* Top Row */}
      <View style={styles.topRow}>
        {/* Left Side - Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>This Month</Text>
        </View>

        {/* Right Side - Filter Button */}
        <TouchableOpacity style={styles.filterContainer}>
          <Ionicons name="filter" size={20} color="#007bff" />
          <Text style={styles.filterText}>Filter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  titleContainer: {
    flex: 1,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterText: {
    color: '#007bff',
    fontSize: 16,
    marginLeft: 8,
  },
});

export default Targetnav;