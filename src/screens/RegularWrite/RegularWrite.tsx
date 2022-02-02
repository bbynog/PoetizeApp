import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useState, useCallback } from 'react';
import { View, BackHandler, TextInput } from 'react-native';
import { WriteBox, RegularButton } from 'components';

import { mountTextObject } from 'utils';
import { TextService, NavigationService } from 'services';
import { styles } from './styles';

export const RegularWriteScreen = () => {
  const navigation = useNavigation();

  const [bodyText, setBodyText] = useState('');
  const [titleText, setTitleText] = useState('');

  console.log('regularWrite');

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {};
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
