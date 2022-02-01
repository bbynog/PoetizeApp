import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { RegularButton } from 'components';
import { useNavigation } from '@react-navigation/native';

export const DashboardScreen = () => {
  const navigation = useNavigation();
  const poemDetailsButtonHandler = () => navigation.navigate('PoemDetails');

  return (
    <View style={styles.container}>
      <Text>Halu Dashboard Screen</Text>
      <RegularButton
        onPress={poemDetailsButtonHandler}
        title={'Detalhes do Poema'}
      />
    </View>
  );
};
