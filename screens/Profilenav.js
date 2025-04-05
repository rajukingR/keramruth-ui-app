import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Profilenav = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>My Profile</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#FFFF',
    paddingTop: 50,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Profilenav;