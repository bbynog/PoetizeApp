import React from 'react';
import { View, Text } from 'react-native';

// import { styles } from './Divider.styles';

type DividerProps = {
  size?: number;
};

export const Divider = ({ size }: DividerProps) => {
  const dividerStyles = { marginVertical: size || 2 };
  return <View style={dividerStyles} />;
};
