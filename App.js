import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from "expo-font"
import { useFonts } from 'expo-font';
import AppLoading from "expo-app-loading"
import { enableScreens } from "react-native-screens"

import MealsNavigator from "./navigation/MealsNavigator"

enableScreens()

const fetchFonts = () => {
  return Expo.Font.loadAsync({
    'open-sans': require("./assets/fonts/OpenSans-Regular.ttf"),
    'open-sans-bold': require("./assets/fonts/OpenSans-Bold.ttf"),
  })

  // await Promise.all([Font.loadAsync({ 'SansBold': require('./assets/fonts/OpenSans-Bold.ttf') })]);
}


export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)
  if (!fontLoaded) {
    return <AppLoading startAsync={fetchFonts} onFinish={() => {
      setFontLoaded(true)
    }} onError={console.warn} />
  }
  if (fontLoaded) {
    return (
      <MealsNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
