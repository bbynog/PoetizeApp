import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { RegularButton } from 'components';

import { useNavigation } from '@react-navigation/native';

import { NavigationService } from 'services';

export const WriteScreen = () => {
  const navigation = useNavigation();

  const regularButtonHandler = () => {
    navigation.navigate('RegularWrite');
  };

  const flowButtonHandler = () => {
    navigation.navigate('FlowWrite');
  };

  const testButtonHandler = () => {
    console.log(NavigationService.getCurrentOptions());
  };

  return (
    <View style={styles.container}>
      <Text>Halu Write Screen</Text>
      <RegularButton onPress={regularButtonHandler} title={'RegularWrite'} />
      <RegularButton onPress={flowButtonHandler} title={'FlowWrite'} />
      <RegularButton onPress={testButtonHandler} title={'Teste'} />
    </View>
  );
};
