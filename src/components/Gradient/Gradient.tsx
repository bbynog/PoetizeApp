import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import { LinearGradient, LinearGradientPoint } from 'expo-linear-gradient';

import { useTheme } from '@react-navigation/native';

import { Typography } from '../Typography/Typography';

type GradientProps = {
  style?: StyleProp<ViewStyle>;
  darkerToLighter?: boolean;
  colors?: string[];
  children?: JSX.Element | string;
  start?: LinearGradientPoint;
  end?: LinearGradientPoint;
};
export const Gradient = ({
  style,
  darkerToLighter = true,
  colors,
  children,
  start,
  end,
}: GradientProps) => {
  const { colors: colorsTheme } = useTheme();
  const colorsArray = [colorsTheme.primaryDarker, colorsTheme.primary];
  if (!darkerToLighter) {
    colorsArray.unshift(colorsArray.pop() || colorsTheme.primary);
  }
  return (
    <>
      <LinearGradient
        colors={colors ? colors : colorsArray}
        style={style}
        start={start}
        end={end}
      >
        {children}
      </LinearGradient>
    </>
  );
};
