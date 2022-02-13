import { StyleSheet } from 'react-native';
import { lightTheme } from 'theme';

const { colors } = lightTheme;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    elevation: 4,
    width: '100%',
    height: '100%',
    borderRadius: 6,
    backgroundColor: colors.card,
    // over,
  },
  headerContainer: {},
});
