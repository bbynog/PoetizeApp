import { View, TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import React from 'react';
import { Gradient } from '../Gradient/Gradient';
import { LinearGradientPoint } from 'expo-linear-gradient';

import { styles } from './GradientButton.styles';
import { Typography } from '../Typography/Typography';

interface GradientButtonProps {
  title: string;
  onPress: () => void;
  colors?: string[];
  fontColor?: string;
  style?: StyleProp<ViewStyle>;
  gradientStyle?: StyleProp<ViewStyle>;
  start?: LinearGradientPoint;
  end?: LinearGradientPoint;
}

export const GradientButton = ({
  title,
  onPress,
  colors,
  gradientStyle,
  style,
  start,
  end,
  fontColor,
}: GradientButtonProps) => {
  const gradientStyles = [styles.gradient, gradientStyle];
  const containerStyles = [styles.container, style];

  return (
    <View style={containerStyles}>
      <TouchableOpacity onPress={onPress}>
        <Gradient
          style={gradientStyles}
          colors={colors}
          start={start}
          end={end}
        >
          <Typography color={fontColor ? fontColor : '#fff'}>
            {title}
          </Typography>
        </Gradient>
      </TouchableOpacity>
    </View>
  );
};
