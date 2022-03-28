import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../Home'
import Manage from '../Manage'
import Profile from '../Profile'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createMaterialBottomTabNavigator();

const HomeNavigation = () => {
    return(
    <Tab.Navigator
    backBehavior='initialRoute'
    tabBarOptions={{
        activeTintColor: '#CA3E47',
      }}
      activeColor="#fff"
      barStyle={{ backgroundColor: '#CA3E47' }}
    >
        <Tab.Screen name="Home" component={Home} 
        options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),}}
        />
        <Tab.Screen name="Manage" component={Manage} 
            options={{
                tabBarLabel: 'Manage',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="video" color={color} size={26} />
                ),}}
        />
        <Tab.Screen name="Profile" component={Profile} 
            options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="account" color={color} size={26} />
                ),}}
        />
        </Tab.Navigator>
    )
}

export default HomeNavigation;