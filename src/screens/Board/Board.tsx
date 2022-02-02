import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { RegularButton, Typography } from 'components';
import { useNavigation } from '@react-navigation/native';

export const BoardScreen = () => {
  const navigation = useNavigation();
  const poemDetailsButtonHandler = () => navigation.navigate('PoemDetails');

  return (
    <View style={styles.container}>
      <Typography>Halu Board Screen</Typography>
      <RegularButton
        onPress={poemDetailsButtonHandler}
        title={'Detalhes do Poema'}
      />
    </View>
  );
};
