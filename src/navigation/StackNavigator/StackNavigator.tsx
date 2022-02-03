import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

import { Gradient } from 'components';

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
  headerTitleStyle: {
    fontFamily: 'honey-florist',
    fontSize: 53,
    color: colors.card,
  },
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
          headerTitle: '( Mural  )',
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
          headerTitle: '( Poetize-se  )',
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
          headerTitle: '( Você  )',
        }}
      />
    </Stack.Navigator>
  );
};
