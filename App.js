import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppButton from './app/components/AppButton';
import Screen from './app/components/Screen';
import MainScreen from './app/screens/MainScreen';
import SoundScreen from './app/screens/SoundScreen';


export default function App() {
  return (
    /*
    <Screen>
      <MainScreen />
    </Screen>
    */
    <Screen>
      <SoundScreen></SoundScreen>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
