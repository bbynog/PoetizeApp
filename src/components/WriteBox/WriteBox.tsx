import React from 'react';
import { TextStyle, TextInput } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { styles } from './WriteBox.styles';

type WriteBoxProps = {
  setTitleState: (titleState: string) => void;
  setBodyState: (bodyState: string) => void;
  titleStyles?: TextStyle;
  bodyStyles?: TextStyle;
};

export const WriteBox = ({
  setTitleState,
  setBodyState,
  titleStyles,
  bodyStyles,
}: WriteBoxProps) => {
  const { colors } = useTheme();

  const titleInputStyles = [
    styles.titleTextInput,
    { color: colors.text },
    titleStyles,
  ];
  const bodyInputStyles = [
    styles.bodyTextInput,
    { color: colors.text },
    bodyStyles,
  ];
  return (
    <>
      <TextInput
        onChangeText={setTitleState}
        style={titleInputStyles}
        autoCorrect={false}
      />
      <TextInput
        onChangeText={setBodyState}
        multiline={true}
        numberOfLines={25}
        style={bodyInputStyles}
        autoCorrect={false}
      />
    </>
  );
};
