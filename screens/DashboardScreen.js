import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

const DashboardScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: "https://via.placeholder.com/150x50" }}
          style={styles.logo}
        />
        <Ionicons name="search-outline" size={24} color="black" />
      </View>

      {/* Location */}
      <View style={styles.locationContainer}>
        <Ionicons name="location-outline" size={20} color="gray" />
        <Text style={styles.locationText}>Bengaluru, Karnataka</Text>
        <Ionicons name="refresh-outline" size={20} color="gray" />
      </View>

      {/* Profile Card */}
      <View style={styles.profileCard}>
        <Image
          source={{ uri: "https://via.placeholder.com/80" }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Darsh</Text>
        <Text style={styles.role}>
          <Text style={styles.memberId}>M54456</Text> | Master Distributor
        </Text>
        <Text style={styles.club}>
          Club: <Text style={styles.blueText}>1000 Litres</Text>
        </Text>

        {/* Stock Bar */}
        <View style={styles.stockContainer}>
          <Text style={styles.stockText}>Stock</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: "48%" }]} />
          </View>
          <Text style={styles.stockValue}>240L / 500L 48%</Text>
        </View>

        {/* Monthly Target */}
        <View style={styles.targetContainer}>
          <Text style={styles.targetText}>500 L Monthly Target</Text>
          <Text style={styles.targetText}>260 L Achieved</Text>
          <Text style={styles.targetText}>240 L Pending</Text>
        </View>
      </View>

      {/* Order Button */}
      <TouchableOpacity style={styles.bookOrderButton}>
        <Text style={styles.bookOrderText}>BOOK ORDER</Text>
      </TouchableOpacity>

      {/* Distributors Info */}
      <View style={styles.infoContainer}>
        <Text style={styles.infoBox}>Super Distributors 110</Text>
        <Text style={styles.infoBox}>Distributors 120</Text>
        <Text style={styles.infoBox}>Customers 154</Text>
      </View>

      {/* Members List */}
      <View style={styles.memberList}>
        {members.map((member, index) => (
          <View key={index} style={styles.memberItem}>
            <Text style={styles.memberName}>{member.name}</Text>
            <Text style={styles.memberId}>{member.id}</Text>
            <Text style={styles.joinDate}>{member.dateJoined}</Text>
            <Text style={styles.phone}>{member.phone}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const members = [
  {
    name: "Chakradhar",
    id: "S54985",
    dateJoined: "15 Mar-24",
    phone: "+91 985865878",
  },
  {
    name: "Kabir",
    id: "S56542",
    dateJoined: "12 Mar-24",
    phone: "+91 985865847",
  },
  {
    name: "Imaran",
    id: "S56387",
    dateJoined: "12 Mar-24",
    phone: "+91 985865847",
  },
];

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  logo: { width: 150, height: 50, resizeMode: "contain" },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  locationText: { marginHorizontal: 5, color: "gray", fontSize: 14 },
  profileCard: {
    alignItems: "center",
    padding: 15,
    backgroundColor: "#F9F9F9",
    borderRadius: 10,
    margin: 15,
  },
  profileImage: { width: 80, height: 80, borderRadius: 40, marginBottom: 10 },
  name: { fontSize: 20, fontWeight: "bold" },
  role: { fontSize: 14, color: "#666" },
  memberId: { color: "#007AFF", fontWeight: "bold" },
  club: { fontSize: 14, color: "#666" },
  blueText: { color: "#007AFF" },
  stockContainer: { width: "100%", alignItems: "center", marginTop: 10 },
  stockText: { fontSize: 14, fontWeight: "bold" },
  progressBar: {
    width: "80%",
    height: 8,
    backgroundColor: "#E0E0E0",
    borderRadius: 4,
    marginTop: 5,
  },
  progressFill: { height: 8, backgroundColor: "red", borderRadius: 4 },
  stockValue: { fontSize: 14, color: "#666", marginTop: 5 },
  targetContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 10,
  },
  targetText: { fontSize: 12, color: "#444" },
  bookOrderButton: {
    backgroundColor: "#15c249",
    padding: 10,
    margin: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  bookOrderText: { color: "#FFF", fontSize: 16, fontWeight: "bold" },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
  },
  infoBox: {
    backgroundColor: "#E0F7EF",
    padding: 10,
    borderRadius: 5,
    fontSize: 14,
  },
  memberList: { padding: 15 },
  memberItem: {
    backgroundColor: "#FFF",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    elevation: 1,
  },
  memberName: { fontSize: 16, fontWeight: "bold" },
  joinDate: { fontSize: 12, color: "gray" },
  phone: { fontSize: 14, color: "#007AFF", marginTop: 5 },
});

export default DashboardScreen;
