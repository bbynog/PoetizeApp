import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { GradientButton } from 'components';
import { useNavigation } from '@react-navigation/native';

export const BoardScreen = () => {
  const navigation = useNavigation();
  const poemDetailsButtonHandler = () => navigation.navigate('PoemDetails');

  return (
    <View style={styles.container}>
      <GradientButton
        onPress={poemDetailsButtonHandler}
        title={'Detalhes do Poema'}
      />
    </View>
  );
};
