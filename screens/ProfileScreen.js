import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    Alert.alert("Sign Out", "Are you sure you want to sign out?", [
      { text: "Cancel", style: "cancel" },
      { text: "Yes", onPress: () => navigation.navigate("Login") } // ✅ Correct navigation
    ]);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        <Image source={{ uri: 'https://via.placeholder.com/80' }} style={styles.profileImage} />
        <View style={styles.profileDetails}>
          <Text style={styles.name}>Darsh</Text>
          <Text style={styles.club}>1000 Litres Club</Text>
          <Text style={styles.distributor}>
            <Text style={styles.memberId}>M25656</Text> • Master Distributor
          </Text>
        </View>
      </View>

      <View style={styles.menu}>
        <MenuItem icon="briefcase" label="Work Status" />
        <MenuItem icon="lock" label="Stock"/>
        <MenuItem icon="user" label="Personal Info"/>
        <MenuItem icon="edit" label="Profile Edit Request" />
        <MenuItem icon="credit-card" label="View ID Card" />
        <MenuItem icon="trash-2" label="Delete Request" />

        {/* Sign Out */}
        <TouchableOpacity style={styles.menuItem} onPress={handleSignOut}>
          <View style={styles.iconContainer}>
            <Icon name="log-out" size={20} color="red" />
          </View>
          <Text style={[styles.menuLabel, { color: "red" }]}>Sign out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

// Menu Item Component
const MenuItem = ({ icon, label }) => {
  return (
    <TouchableOpacity style={styles.menuItem}>
      <View style={styles.iconContainer}>
        <Icon name={icon} size={20} color="#6BC7A6" />
      </View>
      <Text style={styles.menuLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileDetails: {
    marginLeft: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  club: {
    fontSize: 14,
    color: '#666',
  },
  distributor: {
    fontSize: 14,
    color: '#666',
  },
  memberId: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
  menu: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#D3D3D3',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  menuLabel: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  footer: {
    marginTop: 20,
    padding: 20,
    alignItems: 'center',
  },
  address: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});

export default ProfileScreen;
