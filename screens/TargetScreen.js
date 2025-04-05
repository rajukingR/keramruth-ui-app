import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const TargetScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Current Month Target */}
      <View style={styles.currentMonthContainer}>
        <Text style={styles.monthTitle}>This Month</Text>
        <Text style={styles.targetTitle}>Target Litres</Text>
        <Text style={styles.targetValue}>5000 Litres</Text>
        
        {/* Progress Percentage */}
        <Text style={styles.progressPercentage}>46%</Text>
        
        {/* Progress Bar */}
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: '46%' }]} />
        </View>
        
        {/* Done/Pending Section */}
        <View style={styles.statusContainer}>
          <View style={styles.statusItem}>
            <Text style={styles.statusLabel}>Done</Text>
            <Text style={styles.statusValue}>2200 L</Text>
          </View>
          <View style={styles.statusItem}>
            <Text style={styles.statusLabel}>Pending</Text>
            <Text style={styles.statusValue}>2800 L</Text>
          </View>
        </View>
      </View>

      {/* Target History Section */}
      <Text style={styles.sectionTitle}>Target History</Text>
      
      {/* History Items */}
      <View style={styles.historyContainer}>
        <View style={styles.historyItem}>
          <Text style={styles.historyMonth}>Last Month</Text>
          <Text style={[styles.historyPercentage, { color: '#28a745' }]}>100%</Text>
        </View>
        <View style={styles.historyItem}>
          <Text style={styles.historyMonth}>Jun</Text>
          <Text style={[styles.historyPercentage, { color: '#ffc107' }]}>60%</Text>
        </View>
        <View style={styles.historyItem}>
          <Text style={styles.historyMonth}>May</Text>
          <Text style={[styles.historyPercentage, { color: '#dc3545' }]}>30%</Text>
        </View>
        <View style={styles.historyItem}>
          <Text style={styles.historyMonth}>Apr</Text>
          <Text style={[styles.historyPercentage, { color: '#28a745' }]}>100%</Text>
        </View>
        <View style={styles.historyItem}>
          <Text style={styles.historyMonth}>Mar</Text>
          <Text style={[styles.historyPercentage, { color: '#28a745' }]}>100%</Text>
        </View>
        <View style={styles.historyItem}>
          <Text style={styles.historyMonth}>Feb</Text>
          <Text style={[styles.historyPercentage, { color: '#28a745' }]}>100%</Text>
        </View>
      </View>

      {/* Scale */}
      <View style={styles.scaleContainer}>
        <Text style={styles.scaleText}>0</Text>
        <Text style={styles.scaleText}>1000 L</Text>
        <Text style={styles.scaleText}>2000 L</Text>
        <Text style={styles.scaleText}>3000 L</Text>
        <Text style={styles.scaleText}>4000 L</Text>
        <Text style={styles.scaleText}>5000 L</Text>
      </View>

      {/* Legend */}
      <View style={styles.legendContainer}>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#28a745' }]} />
          <Text style={styles.legendText}>Done 100%</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#ffc107' }]} />
          <Text style={styles.legendText}>75%-50%</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#dc3545' }]} />
          <Text style={styles.legendText}>50%-0%</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    padding: 16,
    paddingTop: 0,
  },
  currentMonthContainer: {
    backgroundColor: '#F4FAFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
    elevation: 2,
  },
  monthTitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  targetTitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  targetValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  progressPercentage: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#28a745',
    marginBottom: 8,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#e9ecef',
    borderRadius: 4,
    marginBottom: 16,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#28a745',
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statusItem: {
    alignItems: 'center',
  },
  statusLabel: {
    fontSize: 14,
    color: '#666',
  },
  statusValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  historyContainer: {
    backgroundColor: '#F4FAFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },
  historyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  historyMonth: {
    fontSize: 16,
    color: '#333',
  },
  historyPercentage: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  scaleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  scaleText: {
    fontSize: 12,
    color: '#666',
  },
  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 6,
  },
  legendText: {
    fontSize: 12,
    color: '#666',
  },
});

export default TargetScreen;