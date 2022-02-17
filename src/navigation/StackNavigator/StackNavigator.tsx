import React from 'react';

import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

import { Gradient, HeaderTitleText } from 'components';

import {
  BoardScreen,
  PoemDetailsScreen,
  WriteScreen,
  ProfileScreen,
} from 'screens';

import { StackNavigatorParamList } from 'navigation';

import { lightTheme } from 'theme';

const Stack = createStackNavigator<StackNavigatorParamList>();

const { colors } = lightTheme;

const navigatorDefaultOptions: StackNavigationOptions = {
  headerTitleAlign: 'center',
  headerBackground: () => <Gradient style={{ height: 95 }} />,
  headerTintColor: colors.card,
};

export const BoardStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={navigatorDefaultOptions}>
      <Stack.Screen
        name={'Board'}
        component={BoardScreen}
        options={{
          headerTitle: () => <HeaderTitleText children={' Mural  '} />,
        }}
      />
      <Stack.Screen name={'PoemDetails'} component={PoemDetailsScreen} />
    </Stack.Navigator>
  );
};

export const WriteStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={navigatorDefaultOptions}>
      <Stack.Screen
        name={'Write'}
        component={WriteScreen}
        options={{
          headerTitle: () => <HeaderTitleText children={' Poetize  '} />,
          // headerShown: false, '( Poetize  )'
        }}
      />
    </Stack.Navigator>
  );
};

export const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={navigatorDefaultOptions}>
      <Stack.Screen
        name={'Profile'}
        component={ProfileScreen}
        options={{
          headerTitle: () => <HeaderTitleText children={' Você  '} />,
        }}
      />
    </Stack.Navigator>
  );
};
