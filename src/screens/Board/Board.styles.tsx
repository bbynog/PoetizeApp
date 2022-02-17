import { StyleSheet } from 'react-native';
import { Platform } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    paddingTop: 80,
  },
  cardContainer: {
    marginHorizontal: 15,
  },
  flatListContainer: {
    height: '100%',
    ...Platform.select({
      ios: {
        paddingTop: 25,
      },
    }),
  },
  buttonContainer: {
    position: 'absolute',
    alignSelf: 'center',
    marginTop: '110%',
  },
});
