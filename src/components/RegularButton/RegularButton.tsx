import { View, Button, Text } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';

import { styles } from './styles';

interface RegularButtonProps {
  title: string;
  onPress: () => void;
  color?: string;
}

export const RegularButton = ({
  title,
  onPress,
  color,
}: RegularButtonProps) => {
  const { colors } = useTheme();
  const { primary, onPrimary } = colors;

  const containerStyles = [styles.container, { borderColor: primary }];
  return (
    <View style={containerStyles}>
      <Button title={title} onPress={onPress} color={color ? color : primary} />
    </View>
  );
};
