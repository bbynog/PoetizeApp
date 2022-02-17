import React, { useState } from 'react';
import {
  TextStyle,
  TextInput,
  Platform,
  KeyboardAvoidingView,
  View,
} from 'react-native';
import { useTheme } from '@react-navigation/native';

import { styles } from './WriteBox.styles';

type WriteBoxProps = {
  textSetter: (bodyState: string) => void;
  styles?: TextStyle;
  autoFocus?: boolean;
};

export const WriteBox = ({
  textSetter: parentTextSetter,
  styles: customStyles,
  autoFocus,
}: WriteBoxProps) => {
  const { colors } = useTheme();

  const [text, setText] = useState('');

  const setTextStates = (value: string) => {
    parentTextSetter(value);
    setText(value);
  };

  const textInputStyles = [
    styles.textInput,
    { color: colors.text },
    customStyles,
  ];

  const renderWriteBox = () => {
    return (
      <View style={styles.container}>
        <TextInput
          autoFocus={autoFocus}
          onChangeText={setTextStates}
          multiline={true}
          numberOfLines={1}
          style={textInputStyles}
          autoCorrect={false}
          value={text}
          // onBlur={() => Keyboard.dismiss()}
        />
      </View>
    );
  };

  return (
    <>
      {Platform.OS === 'ios' ? (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 65 : undefined}
        >
          {renderWriteBox()}
        </KeyboardAvoidingView>
      ) : (
        renderWriteBox()
      )}
    </>
  );
};
