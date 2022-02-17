import { StyleSheet } from 'react-native';
import { Platform } from 'react-native';

export const styles = StyleSheet.create({
  mainTextScope: {
    fontFamily: 'honey-florist',
    fontSize: 50,
    height: 110,
    ...Platform.select({
      ios: {
        paddingTop: 48,
      },
      android: {
        textAlignVertical: 'center',
      },
    }),
  },
});
