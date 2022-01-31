import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './styles';

import { useNavigation } from '@react-navigation/native';

export const WriteScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Halu Write Screen</Text>
      <Button
        onPress={() => navigation.navigate('RegularWrite')}
        title={'RegularWrite'}
      />
      <Button
        onPress={() => navigation.navigate('FlowWrite')}
        title={'FlowWrite'}
      />
    </View>
  );
};
