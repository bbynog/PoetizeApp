import React from 'react';
import { TextStyle, TextInput } from 'react-native';

import { styles } from './styles';

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
  const titleInputStyles = [styles.titleTextInput, titleStyles];
  const bodyInputStyles = [styles.bodyTextInput, bodyStyles];
  return (
    <>
      <TextInput onChangeText={setTitleState} style={titleInputStyles} />
      <TextInput
        onChangeText={setBodyState}
        multiline={true}
        numberOfLines={25}
        style={bodyInputStyles}
      />
    </>
  );
};
