import React from 'react';
import {
  View,
  FlatList,
  Text,
  ActivityIndicator,
  Platform,
} from 'react-native';
import { styles } from './Board.styles';
import { GradientButton } from 'components';
import { useNavigation, useTheme } from '@react-navigation/native';

import { useGetAllTexts } from './Board.queries';

import { NavigationService } from 'services';

export const BoardScreen = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();

  const poemDetailsButtonHandler = () => navigation.navigate('PoemDetails');
  const resetButtonHandler = () => NavigationService.reset();

  const { isLoading, data, isFetching } = useGetAllTexts();

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator
          color={colors.primary}
          size={Platform.OS === 'android' ? 60 : 'large'}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={({ item }) => <Text>{item.id}</Text>} />
      <GradientButton onPress={resetButtonHandler} title={'Reset'} />
    </View>
  );
};
