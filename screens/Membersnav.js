import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const MembersNav = () => {
  return (
    <View style={styles.navContainer}>
      <Text style={styles.title}>Members</Text>
      <TouchableOpacity>
        <Text style={styles.addButton}>+ Add Member</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  addButton: {
    fontSize: 16,
    color: '#007bff',
  },
});

export default MembersNav;
