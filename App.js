import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppButton from './app/components/AppButton';
import Screen from './app/components/Screen';
import MainScreen from './app/screens/MainScreen';
import SoundScreen from './app/screens/SoundScreen';
import AboutScreen from './app/screens/AboutScreen';

const Stack = createNativeStackNavigator();

// Android banner: ca-app-pub-2808381562562984/6925387539

export default function App() {
  return (
    /*
    <Screen>
      <MainScreen />
    </Screen>
    */
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MainScreen} options={{ title: '', headerStyle: styles.navigatorHeader, headerTintColor: '#202124' }} />
        <Stack.Screen name="SoundScreen" style={{ backgroundColor: '#202124' }} component={SoundScreen} options={({ route }) => ({
          title: route.params.title,
          headerStyle: route.params.style,
          headerTintColor: 'white',
          headerTitleAlign: 'center',
        })} />
        <Stack.Screen name="About" component={AboutScreen} headerStyle={{ backgroundColor: '#202124' }} options={{ title: 'About', headerTintColor: 'white', headerTitleAlign: 'center', headerStyle: { backgroundColor: '#202124' } }} />
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
  navigatorHeader: {
    backgroundColor: '#202124',
  }
});
