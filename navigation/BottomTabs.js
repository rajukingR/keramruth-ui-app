import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardScreen from '../screens/DashboardScreen';
import MembersScreen from '../screens/MembersScreen';
import TargetScreen from '../screens/TargetScreen';
import HistoryScreen from '../screens/HistoryScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LoginScreen from '../screens/LoginScreen';
import { Ionicons } from '@expo/vector-icons';
import Navdash from '../screens/Navdash';
import MembersNav from '../screens/Membersnav';
import Targetnav from '../screens/Targetnav';
import Historynav from '../screens/Historynav';
import Profilenav from '../screens/Profilenav';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Dashboard') {
            iconName = 'home-outline';
          } else if (route.name === 'Members') {
            iconName = 'people-outline';
          } else if (route.name === 'Target') {
            iconName = 'flag-outline';
          } else if (route.name === 'History') {
            iconName = 'time-outline';
          } else if (route.name === 'Profile') {
            iconName = 'person-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#15c249',
        tabBarInactiveTintColor: 'gray',
        headerShown: false, // This hides headers for all tab screens by default
      })}
    >
      <Tab.Screen 
        name="Dashboard" 
        component={DashboardScreen} 
        options={{ 
          title: 'Dashboard',
          headerShown: true, 
          header: () => <Navdash />, 
        }}
      />
      <Tab.Screen 
        name="Members" 
        component={MembersScreen} 
        options={{ 
          title: 'Members',
          headerShown: true, 
          header: () => <MembersNav/>,
        }}
      />
      <Tab.Screen 
        name="Target" 
        component={TargetScreen} 
        options={{ 
          title: 'Target',
          headerShown: true, 
          header: () => <Targetnav/>,
        }}
      />
      <Tab.Screen 
        name="History" 
        component={HistoryScreen} 
        options={{ 
          title: 'History',
          headerShown: true, 
          header: () => <Historynav/>,
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{ 
          title: 'Profile',
          headerShown: true, 
          header: () => <Profilenav/>,
        }}
      />
    </Tab.Navigator>
  );
};
// Main Navigation Stack
const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Main" 
          component={BottomTabs} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainNavigator;