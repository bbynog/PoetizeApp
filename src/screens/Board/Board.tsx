import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { styles } from './styles';
import { GradientButton } from 'components';
import { useNavigation } from '@react-navigation/native';

import { useGetAllTexts } from './queries';

import { NavigationService } from 'services';

export const BoardScreen = () => {
  const navigation = useNavigation();
  const poemDetailsButtonHandler = () => navigation.navigate('PoemDetails');
  const resetButtonHandler = () => NavigationService.reset();
  const { isLoading, data, isFetching } = useGetAllTexts();
  if (isLoading) {
    return (
      <View style={styles.container}>
        <GradientButton
          onPress={poemDetailsButtonHandler}
          title={'Carregandoooooo do Poema'}
        />
      </View>
    );
  }
  console.log('data', data);

  return (
    <View style={styles.container}>
      {/* <GradientButton
        onPress={poemDetailsButtonHandler}
        title={'Detalhes do Poema'}
      /> */}
      <View style={{ paddingTop: 50 }} />
      <FlatList data={data} renderItem={({ item }) => <Text>{item.id}</Text>} />
      <GradientButton onPress={resetButtonHandler} title={'Reset'} />
    </View>
  );
};
