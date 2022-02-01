import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  DashboardStackNavigator,
  WriteStackNavigator,
  ProfileStackNavigator,
} from './StackNavigator';

import { FontAwesome5, FontAwesome, Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="DashboardTab"
        component={DashboardStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name={'clipboard-list'} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="WriteTab"
        component={WriteStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name={'pencil-square-o'} color={color} size={size} />
          ),
          tabBarHideOnKeyboard: true,
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name={'md-person-circle-outline'}
              color={color}
              size={size + 4}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
