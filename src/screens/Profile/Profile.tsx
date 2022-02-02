import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { Typography } from 'components';

export const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Typography fontSize={25}>Halu Profile Screen</Typography>
    </View>
  );
};
