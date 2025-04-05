import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Historynav = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>History</Text>
        <TouchableOpacity>
          <Text style={styles.viewFeedback}>View Feedback</Text>
        </TouchableOpacity>
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
    marginBottom: 16,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  viewFeedback: {
    color: '#007bff',
    fontSize: 16,
  },
});

export default Historynav;