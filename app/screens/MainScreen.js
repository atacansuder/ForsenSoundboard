import React from 'react';
import { Dimensions, StyleSheet, View, Text, TouchableHighlight, Image } from 'react-native';

import Screen from '../components/Screen';

var { width, height } = Dimensions.get('window');

function MainScreen({ navigation }) {
    return (
        <Screen>
            <View style={styles.main}>
                <View style={styles.title}>
                    <Text style={styles.titleText}>
                        Forsen Soundboard
                    </Text>
                </View>
                <View style={styles.submain}>
                    <View style={styles.submain2}>
                        <TouchableHighlight onPress={() => navigation.navigate('SoundScreen', { category: 'forsen', title: 'Forsen Lines', style: styles.navigatorStyle })}>
                            <View style={styles.button}>
                                <Image style={styles.image} source={require('../../assets/images/Pepepains.png')} />
                                <Text style={styles.buttonText}>Forsen</Text>
                                <Text style={styles.buttonText}>Lines</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.submain2}>
                        <TouchableHighlight onPress={() => navigation.navigate('SoundScreen', { category: 'donation', title: '-10 LULE', style: styles.navigatorStyle })}>
                            <View style={styles.button}>
                                <Image style={styles.image} source={require('../../assets/images/LULE.png')} />
                                <Text style={styles.buttonText}>Donations</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={styles.submain}>
                    <View style={styles.submain2}>
                        <TouchableHighlight onPress={() => console.log('FORSEN')}>
                            <View style={styles.button}>
                                <Image style={styles.image} source={require('../../assets/images/ZULUL.png')} />
                                <Text style={styles.buttonText}>Uganda</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.submain2}>
                        <TouchableHighlight onPress={() => console.log('FORSEN')}>
                            <View style={styles.button}>
                                <Image style={styles.image} source={require('../../assets/images/gachiGASM.png')} />
                                <Text style={styles.buttonText}>Gachi</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 85,
        height: 115,
        alignItems: 'center',
        paddingTop: 10,
    },
    image: {

        height: 66,
        width: 66,
    },
    buttonText: {
        fontFamily: 'Helvetica',
        fontSize: 14,
        marginBottom: -5,
        color: 'white',
        paddingTop: 5,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
    titleContainer: {
        paddingTop: 0,
        flex: 0.33,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        paddingTop: 80,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',

    },
    titleText: {
        fontFamily: 'Helvetica',
        fontSize: 40,
        color: 'white',
        paddingBottom: 50,
        textAlign: 'center',
    },
    submain: {

        paddingTop: 40,
        marginHorizontal: 50,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',

    },
    submain2: {
        paddingHorizontal: 20,
    },
    main: {

        justifyContent: 'center',
        alignContent: 'center',
    },
    navigatorStyle: {
        backgroundColor: '#202124',
    }
})

export default MainScreen;