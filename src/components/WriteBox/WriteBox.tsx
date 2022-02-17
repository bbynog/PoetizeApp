import React from 'react';
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
  setTextState: (bodyState: string) => void;
  styles?: TextStyle;
};

export const WriteBox = ({
  setTextState,
  styles: customStyles,
}: WriteBoxProps) => {
  const { colors } = useTheme();

  const textInputStyles = [
    styles.textInput,
    { color: colors.text },
    customStyles,
  ];

  const renderWriteBox = () => {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={setTextState}
          multiline={true}
          numberOfLines={25}
          style={textInputStyles}
          autoCorrect={false}
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
          keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : undefined}
        >
          {renderWriteBox()}
        </KeyboardAvoidingView>
      ) : (
        renderWriteBox()
      )}
    </>
  );
};
