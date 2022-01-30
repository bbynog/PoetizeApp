import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './styles';

export const DashboardScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Halu Dashboard Screen</Text>
      <Button
        onPress={() => navigation.navigate('PoemDetails')}
        title={'Detalhes do Poema'}
      />
    </View>
  );
};
