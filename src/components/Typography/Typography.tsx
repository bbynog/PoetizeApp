import { View, Text } from 'react-native';
import React from 'react';

import { styles } from './styles';

type TypographyProps = {
  fontWeight?: 'bold' | 'regular';
  fontSize?: number;
  children?: string | JSX.Element;
  color?: string;
};
export const Typography = ({
  fontWeight,
  fontSize,
  children,
  color,
}: TypographyProps) => {
  let fontFamily = 'open-sans-regular';
  if (fontWeight === 'bold') {
    fontFamily = 'open-sans-bold';
  }
  const textStyles = [styles.textDefaults, { fontSize, fontFamily, color }];
  return <Text style={textStyles}>{children}</Text>;
};
