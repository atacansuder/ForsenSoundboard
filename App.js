import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppButton from './app/components/AppButton';
import Screen from './app/components/Screen';
import MainScreen from './app/screens/MainScreen';
import SoundScreen from './app/screens/SoundScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    /*
    <Screen>
      <MainScreen />
    </Screen>
    */
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MainScreen} options={{ title: '' }} />
        <Stack.Screen name="SoundScreen" component={SoundScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
