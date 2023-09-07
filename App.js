import { StatusBar } from 'expo-status-bar';
import { Button, ImageBackground, Pressable, StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { PFCColors } from './colors';
import {
  GestureHandlerRootView,
  NativeViewGestureHandler,
  TouchableOpacity
} from 'react-native-gesture-handler';
import OnBoardingImages from './src/screens/onBoarding';

export default function App() {
  return (
    <OnBoardingImages />
  );
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: '#C43B1E',
    //alignContent: "center",
    //justifyContent: 'center',
  },
  text: {
    color: "white",
    fontSize: 20,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  mainText: {
    padding: 30,
    color: "white",
    fontSize: 34,
    fontWeight: '800',
  },
  Button: {
    margin: 30,
    height: 50,
    width: 350,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    backgroundColor: PFCColors.PRIMARY_500,
  },
});