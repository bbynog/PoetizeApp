import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    height: '100%',

    fontFamily: 'open-sans-regular',
    fontSize: 25,
    textAlignVertical: 'top',
    paddingLeft: 15,
    paddingTop: 20,
  },
  container: {
    ...Platform.select({
      android: {
        marginTop: 4,
      },
      ios: {
        paddingTop: 20,
      },
    }),
  },
});
