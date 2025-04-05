import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

// Sample user data with online image URLs
const userData = {
  'Master Distributors': [
    { id: 'M54456', name: 'Darsh', date: '15-Mar-24 Joined', phone: '+91 9858658874', image: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { id: 'M156342', name: 'Divya', date: '12-Mar-24 Joined', phone: '+91 9858655898', image: 'https://randomuser.me/api/portraits/women/1.jpg' },
    { id: 'M18587', name: 'Aarav', date: '13-Mar-24 Joined', phone: '+91 9858655887', image: 'https://randomuser.me/api/portraits/men/2.jpg' },
    { id: 'M156542', name: 'Kabir', date: '12-Mar-24 Joined', phone: '+91 9858655812', image: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { id: 'M156387', name: 'Imaran', date: '12-Mar-24 Joined', phone: '+91 9858655898', image: 'https://randomuser.me/api/portraits/men/4.jpg' },
  ],
  'Super Distributors': [
    { id: 'S12345', name: 'Super User 1', date: '10-Mar-24 Joined', phone: '+91 9876543210', image: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { id: 'S23456', name: 'Super User 2', date: '11-Mar-24 Joined', phone: '+91 9876543211', image: 'https://randomuser.me/api/portraits/women/3.jpg' },
    { id: 'S34567', name: 'Super User 3', date: '12-Mar-24 Joined', phone: '+91 9876543212', image: 'https://randomuser.me/api/portraits/men/5.jpg' },
    { id: 'S45678', name: 'Super User 4', date: '13-Mar-24 Joined', phone: '+91 9876543213', image: 'https://randomuser.me/api/portraits/women/4.jpg' },
    { id: 'S56789', name: 'Super User 5', date: '14-Mar-24 Joined', phone: '+91 9876543214', image: 'https://randomuser.me/api/portraits/men/6.jpg' },
  ],
  'Distributors': [
    { id: 'D12345', name: 'Distributor 1', date: '10-Mar-24 Joined', phone: '+91 9876543210', image: 'https://randomuser.me/api/portraits/women/5.jpg' },
    { id: 'D23456', name: 'Distributor 2', date: '11-Mar-24 Joined', phone: '+91 9876543211', image: 'https://randomuser.me/api/portraits/men/7.jpg' },
    { id: 'D34567', name: 'Distributor 3', date: '12-Mar-24 Joined', phone: '+91 9876543212', image: 'https://randomuser.me/api/portraits/women/6.jpg' },
    { id: 'D45678', name: 'Distributor 4', date: '13-Mar-24 Joined', phone: '+91 9876543213', image: 'https://randomuser.me/api/portraits/men/8.jpg' },
    { id: 'D56789', name: 'Distributor 5', date: '14-Mar-24 Joined', phone: '+91 9876543214', image: 'https://randomuser.me/api/portraits/women/7.jpg' },
  ],
  'Customers': [
    { id: 'C12345', name: 'Customer 1', date: '10-Mar-24 Joined', phone: '+91 9876543210', image: 'https://randomuser.me/api/portraits/men/9.jpg' },
    { id: 'C23456', name: 'Customer 2', date: '11-Mar-24 Joined', phone: '+91 9876543211', image: 'https://randomuser.me/api/portraits/women/8.jpg' },
    { id: 'C34567', name: 'Customer 3', date: '12-Mar-24 Joined', phone: '+91 9876543212', image: 'https://randomuser.me/api/portraits/men/10.jpg' },
    { id: 'C45678', name: 'Customer 4', date: '13-Mar-24 Joined', phone: '+91 9876543213', image: 'https://randomuser.me/api/portraits/women/9.jpg' },
    { id: 'C56789', name: 'Customer 5', date: '14-Mar-24 Joined', phone: '+91 9876543214', image: 'https://randomuser.me/api/portraits/women/10.jpg' },
  ],
};

const DashboardScreen = () => {
  const [activeTab, setActiveTab] = useState('Master Distributors');
  const currentStock = 250;
  const maxStock = 200;
  const percentage = Math.min(Math.round((currentStock / maxStock) * 100), 100);

  // Determine progress bar color based on percentage
  const getProgressBarColor = () => {
    if (percentage <= 50) return '#FF5722'; // Red
    if (percentage <= 80) return '#FFA500'; // Orange
    return '#22D75E'; // Green
  };

  const renderUserItem = ({ item }) => (
    <View style={styles.userCard}>
      <View style={styles.userLeft}>
        <Image source={{ uri: item.image }} style={styles.userImage} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{item.name}</Text>
          <Text style={styles.userId}>{item.id}</Text>
        </View>
      </View>
      <View style={styles.userRight}>
        <Text style={styles.userDate}>{item.date}</Text>
        <Text style={styles.userPhone}>{item.phone}</Text>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* User Profile Section */}
      <View style={styles.profileCard}>
        <View style={styles.profileImageContainer}>
            <Image source={require('../assets/rocky.jpg')} // Replace with your image path
                                style={styles.profileImage}
                              />
          <View style={styles.onlineStatus} />
        </View>
        <Text style={styles.profileName}>Raghava</Text>
        <View style={styles.idRoleContainer}>
          <Text style={styles.profileId}>S54456</Text>
          <Text style={styles.profileRole}> | Super Distributor</Text>
        </View>
        
        <View style={styles.profileClubBadge}>
          <FontAwesome name="trophy" size={14} color="#FFD700" />
          <Text style={styles.profileClubText}>Club: 1000 Litres</Text>
        </View>

        {/* Stock Section */}
        <View style={styles.stockContainer}>
          <Text style={styles.stockLabel}>Stock</Text>
          <View style={styles.progressBarOuter}>
            <View 
              style={[
                styles.progressBarInner, 
                { 
                  width: `${percentage}%`,
                  backgroundColor: getProgressBarColor()
                }
              ]}
            >
              <View style={styles.progressBarTextContainer}>
                <Text style={styles.progressBarTextLeft}>{currentStock} L / {maxStock} L</Text>
                <Text style={styles.progressBarTextRight}>{percentage}%</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Stats Card */}
      <View style={styles.statsCard}>
        <View style={styles.statsItem}>
          <Text style={styles.statsNumber}>₹24,560</Text>
          <Text style={styles.statsLabel}>Earnings</Text>
        </View>
        <View style={styles.statsItem}>
          <Text style={styles.statsNumber}>45</Text>
          <Text style={styles.statsLabel}>Orders</Text>
        </View>
        <View style={styles.statsItem}>
          <Text style={styles.statsNumber}>92%</Text>
          <Text style={styles.statsLabel}>Rating</Text>
        </View>
      </View>

      {/* 2x2 Grid Buttons */}
      <View style={styles.gridContainer}>
        <TouchableOpacity 
          style={[
            styles.gridButton, 
            activeTab === 'Master Distributors' && styles.activeGridButton
          ]}
          onPress={() => setActiveTab('Master Distributors')}
        >
          <Text style={[
            styles.gridButtonText,
            activeTab === 'Master Distributors' && styles.activeGridButtonText
          ]}>
            Master Distributors
          </Text>
          <View style={styles.memberBadge}>
            <FontAwesome name="users" size={12} color="#4CAF50" style={styles.memberIcon} />
            <Text style={styles.memberCount}>90</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[
            styles.gridButton, 
            activeTab === 'Super Distributors' && styles.activeGridButton
          ]}
          onPress={() => setActiveTab('Super Distributors')}
        >
          <Text style={[
            styles.gridButtonText,
            activeTab === 'Super Distributors' && styles.activeGridButtonText
          ]}>
            Super Distributors
          </Text>
          <View style={styles.memberBadge}>
            <FontAwesome name="users" size={12} color="#4CAF50" style={styles.memberIcon} />
            <Text style={styles.memberCount}>110</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[
            styles.gridButton, 
            activeTab === 'Distributors' && styles.activeGridButton
          ]}
          onPress={() => setActiveTab('Distributors')}
        >
          <Text style={[
            styles.gridButtonText,
            activeTab === 'Distributors' && styles.activeGridButtonText
          ]}>
            Distributors
          </Text>
          <View style={styles.memberBadge}>
            <FontAwesome name="users" size={12} color="#4CAF50" style={styles.memberIcon} />
            <Text style={styles.memberCount}>120</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[
            styles.gridButton, 
            activeTab === 'Customers' && styles.activeGridButton
          ]}
          onPress={() => setActiveTab('Customers')}
        >
          <Text style={[
            styles.gridButtonText,
            activeTab === 'Customers' && styles.activeGridButtonText
          ]}>
            Customers
          </Text>
          <View style={styles.memberBadge}>
            <FontAwesome name="users" size={12} color="#4CAF50" style={styles.memberIcon} />
            <Text style={styles.memberCount}>154</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* User List Section */}
      <View style={styles.userListContainer}>
        <Text style={styles.userListTitle}>{activeTab} List</Text>
        <View style={styles.userList}>
          {userData[activeTab].map((user) => (
            <View key={user.id} style={styles.userCardContainer}>
              <View style={styles.userCard}>
                <View style={styles.userLeft}>
                  <Image source={{ uri: user.image }} style={styles.userImage} />
                  <View style={styles.userInfo}>
                    <Text style={styles.userName}>{user.name}</Text>
                    <Text style={styles.userId}>{user.id}</Text>
                  </View>
                </View>
                <View style={styles.userRight}>
                  <Text style={styles.userDate}>{user.date}</Text>
                  <Text style={styles.userPhone}>{user.phone}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    padding: 16,
    paddingTop: 30,
  },
  // Profile Card Styles
  profileCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 15,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: -20,
    zIndex: 1,
    borderWidth: 0.5,
    borderColor: '#187E53',
  },
  profileImageContainer: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 1,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: '#e6f7ff',
    position: 'relative',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  onlineStatus: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: '#4CAF50',
    borderWidth: 2,
    borderColor: '#FFF',
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 1,
    color: '#333',
  },
  idRoleContainer: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  profileId: {
    fontSize: 14,
    color: '#0280F5',
  },
  profileRole: {
    fontSize: 14,
    color: '#666',
  },
  profileClubBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 16,
    marginBottom: 1,
  },
  profileClubText: {
    color: '#333',
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 6,
  },
  // Stock Section Styles
  stockContainer: {
    width: '100%',
    marginBottom: 1,
  },
  stockLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    textAlign: 'left',
    width: '90%',
    alignSelf: 'center',
  },
  progressBarOuter: {
    width: '90%',
    height: 24,
    backgroundColor: '#E0E0E0',
    borderRadius: 12,
    overflow: 'hidden',
    alignSelf: 'center',
  },
  progressBarInner: {
    height: '100%',
    borderRadius: 12,
    position: 'relative',
  },
  progressBarTextContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  progressBarTextLeft: {
    fontSize: 12,
    color: '#FFF',
    fontWeight: 'bold',
  },
  progressBarTextRight: {
    fontSize: 12,
    color: '#FFF',
    fontWeight: 'bold',
  },
  // Stats Card Styles
  statsCard: {
    backgroundColor: '#187E53',
    borderRadius: 16,
    padding: 30,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  statsItem: {
    alignItems: 'center',
    flex: 1,
  },
  statsNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
  statsLabel: {
    fontSize: 14,
    color: '#E0E0E0',
    marginTop: 4,
  },
  
  // Grid Button Styles
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  gridButton: {
    width: (width - 48) / 2,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    overflow: 'visible', 
  },
  activeGridButton: {
    backgroundColor: '#187E53',
    borderColor: '#4CAF50',
  },
  gridButtonText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#212121',
    marginLeft: 8,
  },
  activeGridButtonText: {
    color: '#FFFFFF',
  },
  memberBadge: {
    backgroundColor: '#ECF5FD',
    borderRadius: 50, 
    borderWidth: 1,
    borderColor: '#4CAF50',
    height: 45, 
    width: 45, 
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: -8, 
    top: -4, 
    display: 'flex',
    flexDirection: 'row',
    gap: 2,
  },
  memberCount: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#4CAF50',
  },

  // User List Styles
  userListContainer: {
    marginTop: 16,
  },
  userListTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  userList: {
    marginBottom: 20,
  },
  userCardContainer: {
    marginBottom: 8,
    borderRadius: 12,
    overflow: 'hidden',
  },
  userCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    backgroundColor: '#ECF5FD',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  userLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  userImage: {
    width: 45,
    height: 45,
    borderRadius: 25,
    marginRight: 12,
  },
  userInfo: {
    justifyContent: 'center',
  },
  userName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  userId: {
    fontSize: 12,
    color: '#0280F5',
    marginTop: 2,
  },
  userRight: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  userDate: {
    fontSize: 12,
    color: '#666',
  },
  userPhone: {
    fontSize: 12,
    color: '#0280F5',
    marginTop: 4,
    fontWeight: '500',
  },
});

export default DashboardScreen;