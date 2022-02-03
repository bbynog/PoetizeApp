import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  BoardStackNavigator,
  WriteStackNavigator,
  ProfileStackNavigator,
} from '../StackNavigator/StackNavigator';

import { BottomTabNavigatorParamList } from 'navigation';

import {
  FontAwesome5,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
} from '@expo/vector-icons';

import { useTheme } from '@react-navigation/native';

import { Gradient } from 'components';

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

export const BottomTabNavigator = () => {
  const { colors } = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: colors.card,
        tabBarActiveTintColor: colors.secondary,
        tabBarBackground: () => (
          <>
            <Gradient style={{ height: '100%' }} darkerToLighter={false} />
          </>
        ),
      }}
    >
      <Tab.Screen
        name="BoardTab"
        component={BoardStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            // <FontAwesome5 name={'clipboard-list'} color={color} size={size} />
            // <MaterialIcons name={'menu-book'} color={color} size={size} />
            <Octicons name={'book'} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="WriteTab"
        component={WriteStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name={'pencil-square-o'} color={color} size={size} />
            // <MaterialCommunityIcons
            //   name={'fountain-pen'}
            //   color={color}
            //   size={size}
            // />
            // <MaterialCommunityIcons
            //   name={'pencil-box-outline'}
            //   color={color}
            //   size={size}
            // />
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
