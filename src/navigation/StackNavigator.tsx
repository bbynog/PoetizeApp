import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { DashboardScreen } from '../screens/Dashboard/Dashboard';
import { PoemDetailsScreen } from '../screens/PoemDetails/PoemDetails';

import { WriteScreen } from '../screens/Write/Write';

import { ProfileScreen } from '../screens/Profile/Profile';

const Stack = createStackNavigator();

export const DashboardStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={'DashboardStack'} component={DashboardScreen} />
      <Stack.Screen name={'PoemDetailsStack'} component={PoemDetailsScreen} />
    </Stack.Navigator>
  );
};

export const WriteStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={'WriteStack'} component={WriteScreen} />
    </Stack.Navigator>
  );
};

export const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={'ProfileStack'} component={ProfileScreen} />
    </Stack.Navigator>
  );
};
