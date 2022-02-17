import React from 'react';
import { View, Text } from 'react-native';

import { Typography } from 'components/Typography/Typography';

import { styles } from './Card.styles';

type CardProps = {
  body: string;
  flagIcon?: JSX.Element;
};

export const Card = ({ body, flagIcon }: CardProps) => {
  return (
    <View style={styles.container}>
      <View>
        <Typography fontSize={19} numberOfLines={3}>
          {body}
        </Typography>
      </View>
    </View>
  );
};
