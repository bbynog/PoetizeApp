import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  DashboardStackNavigator,
  WriteStackNavigator,
  ProfileStackNavigator,
} from './StackNavigator';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="DashboardTab" component={DashboardStackNavigator} />
      <Tab.Screen name="WriteTab" component={WriteStackNavigator} />
      <Tab.Screen name="ProfileTab" component={ProfileStackNavigator} />
    </Tab.Navigator>
  );
};
