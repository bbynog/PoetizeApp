type WriteStackNavigatorParamList = {
  Write: undefined;
};

type BoardStackNavigatorParamList = {
  Board: undefined;
  PoemDetails: undefined;
};

type ProfileStackNavigatorParamList = {
  Profile: undefined;
};

export type StackNavigatorParamList = WriteStackNavigatorParamList &
  BoardStackNavigatorParamList &
  ProfileStackNavigatorParamList;

export type StackScreensEnum = 'Write' | 'Board' | 'PoemDetails' | 'Profile';
