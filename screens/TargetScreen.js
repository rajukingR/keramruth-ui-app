import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TargetScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Target</Text>
      
      <View style={styles.targetCard}>
        <Text style={styles.targetTitle}>Monthly Target</Text>
        <Text style={styles.targetValue}>85% Completed</Text>
        
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: '85%' }]} />
        </View>
        
        <Text style={styles.targetDetail}>You've achieved 85 of 100 targets</Text>
      </View>
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
    marginBottom: 20,
    color: '#333',
  },
  targetCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    elevation: 2,
  },
  targetTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  targetValue: {
    fontSize: 24,
    color: '#28a745',
    marginBottom: 16,
    fontWeight: 'bold',
  },
  progressBar: {
    height: 10,
    backgroundColor: '#e9ecef',
    borderRadius: 5,
    marginBottom: 16,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#28a745',
  },
  targetDetail: {
    fontSize: 14,
    color: '#666',
  },
});

export default TargetScreen;