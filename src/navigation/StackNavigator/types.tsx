type WriteStackNavigatorParamList = {
  Write: undefined;
  RegularWrite: undefined;
  FlowWrite: undefined;
};

type DashboardStackNavigatorParamList = {
  Dashboard: undefined;
  PoemDetails: undefined;
};

type ProfileStackNavigatorParamList = {
  Profile: undefined;
};

export type StackNavigatorParamList = WriteStackNavigatorParamList &
  DashboardStackNavigatorParamList &
  ProfileStackNavigatorParamList;

export type StackScreensEnum =
  | 'Write'
  | 'RegularWrite'
  | 'FlowWrite'
  | 'Dashboard'
  | 'PoemDetails'
  | 'Profile';
