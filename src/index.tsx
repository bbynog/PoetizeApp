import React, { useState } from 'react';
import { Image } from 'react-native';

import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { FontAwesome5, FontAwesome, Ionicons } from '@expo/vector-icons';

import { BottomTabNavigator } from './navigation/TabNavigator';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { lightTheme } from './theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';

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

export const Index = () => {
  const [isAppReady, setIsAppReady] = useState(false);

  const newLightTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      ...lightTheme,
      primary: lightTheme.primary,
    },
  };

  const _loadAssetsAsync = async () => {
    const fontAssets = cacheFonts([
      FontAwesome5.font,
      FontAwesome.font,
      Ionicons.font,
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
    <SafeAreaProvider>
      <NavigationContainer theme={newLightTheme}>
        <BottomTabNavigator />
      </NavigationContainer>
      <StatusBar style={'auto'} />
    </SafeAreaProvider>
  );
};