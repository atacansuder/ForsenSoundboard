import React from 'react';
import { Dimensions, Image, View, StyleSheet, Text, TouchableHighlight } from 'react-native';

var { width, height } = Dimensions.get('window');

function AppButton({ imageSource, text }) {
    return (
        <TouchableHighlight style={styles.view} onPress={() => console.log('forsen forsen forsen')}>
            <View>
                <Image style={styles.image} source={imageSource} />
                <Text style={styles.text}>{text}</Text>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    image: {
        height: height * 0.1,
        width: width * 0.1,
        alignSelf: 'center',
    },
    view: {
        justifyContent: 'center',
        height: height * 0.15,
        width: width * 0.15,
        margin: 20,
    },
    text: {
        alignSelf: 'center',
        color: 'white',
        fontWeight: '500',
        justifyContent: 'center',
    }
})

export default AppButton;