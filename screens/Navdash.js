import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Logo from '../assets/logokeram.svg';
const Navdash = () => {
  return (
    <View style={styles.container}>
  {/* Top Row */}
  <View style={styles.topRow}>
    {/* Left Side - Logo - REMOVED DUPLICATE VIEW */}
    <View style={styles.logoContainer}>
      <Logo width={120} height={40} />
    </View>

    {/* Right Side - Search Bar */}
    <View style={styles.searchContainer}>
      <TextInput
        placeholder="Search"
        style={styles.searchInput}
        placeholderTextColor="#888"
      />
      <Ionicons name="search" size={20} color="#888" style={styles.searchIcon} />
    </View>
  </View>

  {/* Bottom Row */}
  <View style={styles.bottomRow}>
    <View style={styles.locationContainer}>
      <Ionicons name="location-outline" size={18} color="#555" style={styles.locationIcon} />
      <Text style={styles.locationText}>Bengaluru, Karnataka</Text>
    </View>

    <View style={styles.iconsContainer}>
      {/* Download icon with badge */}
      <TouchableOpacity style={styles.iconButton}>
        <View>
          <Ionicons name="download-outline" size={24} color="#000" />
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>3</Text>
          </View>
        </View>
      </TouchableOpacity>

      {/* Notification icon with badge */}
      <TouchableOpacity style={styles.iconButton}>
        <View>
          <Ionicons name="notifications-outline" size={24} color="#000" />
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>5</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  </View>
</View>
  );
};

const styles = StyleSheet.create({
  badgeContainer: {
    position: 'absolute',
    right: -6,
    top: -3,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 15,
    height: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  container: {
    padding: 15,
    backgroundColor: '#fff',
    paddingTop: 30,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  logoContainer: {
    flex: 1,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    paddingHorizontal: 15,
    height: 40,
  },
  searchInput: {
    flex: 1,
    height: '100%',
    fontSize: 16,
  },
  searchIcon: {
    marginLeft: 10,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  locationContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationIcon: {
    marginRight: 8,
  },
  locationText: {
    fontSize: 16,
    color: '#555',
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flex: 1,
  },
  iconButton: {
    marginLeft: 15,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 15,
    color: '#333',
  },
});

export default Navdash;