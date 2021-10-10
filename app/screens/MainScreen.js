import React from 'react';
import { Dimensions, StyleSheet, View, Text, TouchableHighlight, Image } from 'react-native';

var { width, height } = Dimensions.get('window');

function MainScreen(props) {
    return (
        <View style={styles.main}>
            <View style={styles.submain}>
                <Text style={styles.titleText}>
                    Forsen Soundboard
                </Text>
            </View>
            <View style={styles.submain}>
                <TouchableHighlight onPress={() => console.log('FORSEN')}>
                    <View style={styles.button}>
                        <Image style={styles.image} source={require('../../assets/images/forsenE.png')} />
                        <Text style={styles.buttonText}>FORSEN</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => console.log('FORSEN')}>
                    <View style={styles.button}>
                        <Image style={styles.image} source={require('../../assets/images/forsenE.png')} />
                        <Text style={styles.buttonText}>FORSEN</Text>
                    </View>
                </TouchableHighlight>
            </View>
            <View style={styles.submain}>
                <TouchableHighlight onPress={() => console.log('FORSEN')}>
                    <View style={styles.button}>
                        <Image style={styles.image} source={require('../../assets/images/forsenE.png')} />
                        <Text style={styles.buttonText}>FORSEN</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => console.log('FORSEN')}>
                    <View style={styles.button}>
                        <Image style={styles.image} source={require('../../assets/images/forsenE.png')} />
                        <Text style={styles.buttonText}>FORSEN</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        padding: 50,
    },
    image: {
        height: 66,
        width: 66,
    },
    buttonText: {
        color: 'white',
    },
    titleContainer: {
        paddingTop: 0,
        flex: 0.33,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 40,
        color: 'white',
        paddingBottom: 50,
        textAlign: 'center',
    },
    submain: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 0.2,
        flexDirection: 'row',
        paddingBottom: 100,
    },
    main: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    }
})

export default MainScreen;