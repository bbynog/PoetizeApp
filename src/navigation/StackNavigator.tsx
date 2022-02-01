import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
  DashboardScreen,
  PoemDetailsScreen,
  WriteScreen,
  RegularWriteScreen,
  FlowWriteScreen,
  ProfileScreen,
} from 'screens';

type WriteStackNavigatorParamList = {
  Write: undefined;
  RegularWrite: undefined;
  FlowWrite: undefined;
};

type DashboardStackNavigatorParamList = {
  Dashboard: undefined;
  PoemDetails: undefined;
};

type ProfileStackNavigatorParamList = {
  Profile: undefined;
};

type StackNavigatorParamList = WriteStackNavigatorParamList &
  DashboardStackNavigatorParamList &
  ProfileStackNavigatorParamList;

const Stack = createStackNavigator<StackNavigatorParamList>();

export const DashboardStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen name={'Dashboard'} component={DashboardScreen} />
      <Stack.Screen name={'PoemDetails'} component={PoemDetailsScreen} />
    </Stack.Navigator>
  );
};

export const WriteStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitle: '',
      }}
    >
      <Stack.Screen name={'Write'} component={WriteScreen} />
      <Stack.Screen name={'RegularWrite'} component={RegularWriteScreen} />
      <Stack.Screen name={'FlowWrite'} component={FlowWriteScreen} />
    </Stack.Navigator>
  );
};

export const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen name={'Profile'} component={ProfileScreen} />
    </Stack.Navigator>
  );
};
