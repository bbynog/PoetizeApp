import { View, Text } from 'react-native';
import React from 'react';

import { styles } from './Typography.styles';

type TypographyProps = {
  fontWeight?: 'bold' | 'regular';
  fontSize?: number;
  children: string | JSX.Element;
  color?: string;
  numberOfLines?: number;
};
export const Typography = ({
  fontWeight,
  fontSize,
  children,
  color,
  numberOfLines,
}: TypographyProps) => {
  let fontFamily = 'open-sans-regular';
  if (fontWeight === 'bold') {
    fontFamily = 'open-sans-bold';
  }
  const textStyles = [styles.textDefaults, { fontSize, fontFamily, color }];
  return (
    <Text style={textStyles} numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
};
