import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useState, useCallback } from 'react';
import { View, BackHandler, TextInput } from 'react-native';

import { WriteBox } from '../../components/WriteBox/WriteBox';

import { mountTextObject } from '../../utils/functions';

import { styles } from './styles';

export const RegularWriteScreen = () => {
  const navigation = useNavigation();

  const [bodyText, setBodyText] = useState('');
  const [titleText, setTitleText] = useState('');

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        console.log(mountTextObject(titleText, bodyText));
        navigation.goBack();
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
