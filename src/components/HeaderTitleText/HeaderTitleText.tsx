import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './HeaderTitleText.styles';
import { useTheme } from '@react-navigation/native';

type HeaderTitleTextProps = {
  children: string;
};

export const HeaderTitleText = ({ children }: HeaderTitleTextProps) => {
  const { colors } = useTheme();

  const flowerStyles = {
    color: colors.secondary,
  };

  const childrenStyles = {
    color: colors.card,
  };
  return (
    <>
      <Text style={styles.mainTextScope}>
        <Text style={flowerStyles}>(</Text>
        <Text style={childrenStyles}>{children}</Text>
        <Text style={flowerStyles}>)</Text>
      </Text>
    </>
  );
};
