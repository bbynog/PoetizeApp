import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import { WriteStackNavigator, ProfileStackNavigator } from './StackNavigator';
import { BottomTabNavigator } from './TabNavigator';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{}}>
      <Drawer.Screen
        name="Dashboard"
        component={BottomTabNavigator}
        options={{
          headerTitle: 'Poetize-se',
        }}
      />
      <Drawer.Screen name="Write" component={WriteStackNavigator} />
      <Drawer.Screen name="Profile" component={ProfileStackNavigator} />
    </Drawer.Navigator>
  );
};
