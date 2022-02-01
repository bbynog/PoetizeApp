import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useState, useCallback } from 'react';
import { View, BackHandler, TextInput } from 'react-native';
import { WriteBox } from 'components';

import { mountTextObject } from 'utils';
import { TextService } from 'services';
import { styles } from './styles';

export const RegularWriteScreen = () => {
  const navigation = useNavigation();

  const [bodyText, setBodyText] = useState('');
  const [titleText, setTitleText] = useState('');

  useFocusEffect(
    useCallback(() => {
      const onBackPress = async () => {
        navigation.goBack();
        console.log(await TextService.getAllTexts());
        return true;
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [titleText, bodyText])
  );

  return (
    <View style={styles.container}>
      <WriteBox setTitleState={setTitleText} setBodyState={setBodyText} />
    </View>
  );
};
