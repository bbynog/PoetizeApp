import React from 'react';
import { View, Text } from 'react-native';

import { Typography } from 'components/Typography/Typography';

import { styles } from './Card.styles';

type CardProps = {
  header: string;
  body: string;
  flagIcon?: JSX.Element;
};

export const Card = ({ header, body, flagIcon }: CardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Typography fontSize={23} children={header} />
      </View>
      <View>
        <Typography fontSize={19} numberOfLines={3}>
          {body}
        </Typography>
      </View>
    </View>
  );
};
