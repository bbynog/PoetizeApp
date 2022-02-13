import React from 'react';
import {
  View,
  FlatList,
  Text,
  ActivityIndicator,
  Platform,
  ListRenderItem,
} from 'react-native';
import { styles } from './Board.styles';

import { useNavigation, useTheme } from '@react-navigation/native';

import { useGetAllTexts } from './Board.queries';

import { NavigationService, TextService } from 'services';

import { GradientButton, Card, Divider } from 'components';

import { generateRandomId } from 'utils';

import { TextTO } from 'types';
import { useQueryClient } from 'react-query';

export const BoardScreen = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();

  const queryClient = useQueryClient();
  // queryClient.invalidateQueries();

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

  console.log('body ', data && data[0]);

  // if (data) {
  //   const store = async (text: TextTO) => {
  //     const res = await TextService.storeText({
  //       ...data[0],
  //       id: generateRandomId(),
  //     });
  //     console.log(res);
  //   };
  //   store(data[0]);
  // }

  const renderItem: ListRenderItem<TextTO> = ({ item }) => {
    return (
      <View style={styles.cardContainer}>
        <Card
          header={item.title || item.body.slice(0, 15) + '...'}
          body={item.body}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.flatListContainer}>
        <FlatList
          data={data}
          renderItem={renderItem}
          ItemSeparatorComponent={() => <Divider size={10} />}
          ListHeaderComponent={() => <Divider size={10} />}
          ListFooterComponent={() => <Divider size={10} />}
          keyExtractor={item => item.id}
        />
      </View>

      <View style={styles.buttonContainer}>
        <GradientButton onPress={resetButtonHandler} title={'Reset'} />
      </View>
    </View>
  );
};
