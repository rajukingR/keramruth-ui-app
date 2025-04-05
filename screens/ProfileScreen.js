import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    Alert.alert("Sign Out", "Are you sure you want to sign out?", [
      { text: "Cancel", style: "cancel" },
      { text: "Yes", onPress: () => navigation.navigate("Login") }
    ]);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Profile Header Section */}  
      <View style={styles.profileHeader}>
        {/* Left Side - Profile Image, Name and Role */}
        <View style={styles.leftSection}>
           <Image source={require('../assets/rocky.jpg')} // Replace with your image path
                      style={styles.profileImage}
                    />
          <View style={styles.nameRoleContainer}>
            <Text style={styles.name}>Rocky</Text>
            <Text style={styles.role}>ADO</Text>
          </View>
        </View>

        {/* Right Side - Member ID and Club */}
        <View style={styles.rightSection}>
          <Text style={styles.memberId}>A25656</Text>
          <Text style={styles.club}>1000 Litres Club</Text>
        </View>
      </View>

      {/* Menu Options */}
      <View style={styles.menu}>
        <MenuItem icon="briefcase" label="Work Status" />
        <MenuItem icon="lock" label="Stock" />
        <MenuItem icon="user" label="Personal Info" />
        <MenuItem icon="edit" label="Profile Edit Request" />
        <MenuItem icon="credit-card" label="View ID Card" />
        <MenuItem icon="trash-2" label="Delete Request" />

        {/* Sign Out Button */}
        <TouchableOpacity 
          style={styles.menuItem} 
          onPress={handleSignOut}
        >
          <View style={styles.iconContainer}>
            <Icon name="log-out" size={20} color="red" />
          </View>
          <Text style={[styles.menuLabel, { color: "red" }]}>Sign out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

// Reusable Menu Item Component
const MenuItem = ({ icon, label }) => {
  return (
    <TouchableOpacity style={styles.menuItem}>
      <View style={styles.iconContainer}>
        <Icon name={icon} size={20} color="#6BC7A6" />
      </View>
      <Text style={styles.menuLabel}>{label}</Text>
      <Icon name="chevron-right" size={20} color="#D3D3D3" />
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
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameRoleContainer: {
    marginLeft: 15,
  },
  rightSection: {
    alignItems: 'flex-end',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#6BC7A6',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  role: {
    fontSize: 14,
    color: '#007AFF',
    fontWeight: 'bold',
    marginTop: 4,
  },
  memberId: {
    fontSize: 14,
    color: '#007AFF',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  club: {
    fontSize: 14,
    color: '#666',
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
});

export default ProfileScreen;