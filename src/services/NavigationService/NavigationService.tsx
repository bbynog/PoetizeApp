import { navigationRef } from './NavigationRef';
import { NavigationContainerRefWithCurrent } from '@react-navigation/native';
import {
  StackScreensEnum,
  TabScreensEnum,
  BottomTabNavigatorParamList,
  StackNavigatorParamList,
} from 'navigation';

declare global {
  namespace ReactNavigation {
    interface RootParamList
      extends BottomTabNavigatorParamList,
        StackNavigatorParamList {}
  }
}

class NavigationService {
  static instance: NavigationService;
  navigation!: NavigationContainerRefWithCurrent<ReactNavigation.RootParamList>;

  constructor() {
    if (!NavigationService.instance) {
      NavigationService.instance = this;
      this.navigation = navigationRef;
    }
  }
  navigate(key: StackScreensEnum | TabScreensEnum, params?: any) {
    if (this.navigation.isReady()) {
      this.navigation.navigate(key, params);
    }
  }

  goBack() {
    if (this.navigation.isReady()) {
      this.navigation.goBack();
    }
  }

  reset() {
    if (this.navigation.isReady()) {
      this.navigation.reset({
        routes: [{ name: 'BoardTab' }],
      });
    }
  }

  setParams(params: any) {
    if (this.navigation.isReady()) {
      this.navigation.setParams(params);
    }
  }

  resetRoot(stateObject: any) {
    if (this.navigation.isReady()) {
      this.navigation.resetRoot(stateObject);
    }
  }

  getRootState() {
    if (this.navigation.isReady()) {
      return this.navigation.getRootState();
    }
  }

  getCurrentOptions() {
    if (this.navigation.isReady()) {
      return this.navigation.getCurrentOptions();
    }
  }

  addListener(listening: 'options' | 'state', callback: (e: Event) => void) {
    if (this.navigation.isReady()) {
      return this.navigation.addListener(listening, callback);
    }
  }
}

const navigationService = new NavigationService();

export default navigationService;
