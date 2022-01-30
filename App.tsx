import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigator } from './src/navigation/DrawerNavigator';
import { LogBox } from 'react-native';

export default function App() {
  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  ]);
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
