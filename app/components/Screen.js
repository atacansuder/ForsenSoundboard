import React from 'react';
import Constants from 'expo-constants';
import { SafeAreaView, StyleSheet, TouchableHighlight } from 'react-native';

import AppButton from './AppButton';
import MainScreen from '../screens/MainScreen';

function Screen({ children, style }) {
    return (
        <SafeAreaView style={[styles.screen, style]}>
            {children}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#202124',
        paddingTop: Constants.statusBarHeight,
        flex: 1,
    }
})

export default Screen;