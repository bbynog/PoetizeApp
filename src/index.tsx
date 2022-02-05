import React, { useState } from 'react';
import { Image } from 'react-native';
import { navigationRef } from 'services/NavigationService';

import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { FontAwesome5, FontAwesome, Ionicons } from '@expo/vector-icons';

import { BottomTabNavigator } from './navigation/TabNavigator/TabNavigator';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { lightTheme } from './theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { QueryClientProvider, QueryClient } from 'react-query';

import { persistQueryClient } from 'react-query/persistQueryClient-experimental';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAsyncStoragePersistor } from 'react-query/createAsyncStoragePersistor-experimental';

const cacheImages = (images: string[] | any[]) => {
  return images.map(image => {
    if (typeof image === 'string') {
      console.log('entrou em image');
      return Image.prefetch(image);
    } else {
      console.log('entrou no else');
      return Asset.fromModule(image).downloadAsync();
    }
  });
};

const cacheFonts = (fonts: any[]) => {
  return fonts.map(font => Font.loadAsync(font));
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24, // 24 hours
      // cacheTime: 0,
    },
  },
});

const asyncStoragePersistor = createAsyncStoragePersistor({
  storage: AsyncStorage,
});

export const Index = () => {
  const [isAppReady, setIsAppReady] = useState(false);

  persistQueryClient({
    queryClient,
    persistor: asyncStoragePersistor,
  });

  const newLightTheme = {
    ...DefaultTheme,
    ...lightTheme,
    colors: {
      ...DefaultTheme.colors,
      ...lightTheme.colors,
    },
  };

  const _loadAssetsAsync = async () => {
    const fontAssets = cacheFonts([
      FontAwesome5.font,
      FontAwesome.font,
      Ionicons.font,
      {
        'open-sans-regular': require('../assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('../assets/fonts/OpenSans-Bold.ttf'),
        'honey-florist': require('../assets/fonts/HoneyFlorist.otf'),
      },
    ]);
    await Promise.all([...fontAssets]);
  };

  if (!isAppReady) {
    return (
      <AppLoading
        startAsync={_loadAssetsAsync}
        onFinish={() => setIsAppReady(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <NavigationContainer ref={navigationRef} theme={newLightTheme}>
          <BottomTabNavigator />
        </NavigationContainer>
        <StatusBar style={'auto'} />
      </SafeAreaProvider>
    </QueryClientProvider>
  );
};
