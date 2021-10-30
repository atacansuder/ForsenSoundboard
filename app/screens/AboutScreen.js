import React from 'react';
import { Image, Linking, StyleSheet, Text, View } from 'react-native';

import Screen from '../components/Screen';

function AboutScreen(props) {
    return (
        <Screen>
            <View style={styles.about}>
                <View style={styles.image}>
                    <Image source={require('../../assets/images/forsenE.png')} />
                </View>
                <Text style={styles.text}>
                    This is a simple soundboard app about <Text onPress={() => Linking.openURL('https://www.twitch.tv/forsen')} style={styles.link} >forsen</Text> we developed to learn about app development.
                    {"\n\n"}
                    Forsen lines are taken from <Text onPress={() => Linking.openURL('https://github.com/badoge/soundboard')} style={styles.link}>badoge's github repository.</Text>
                    {"\n\n"}
                    Donation sounds are taken from TTS videos of <Text onPress={() => Linking.openURL('https://www.youtube.com/channel/UCnSC6CAOHdmtIKDXnwT7gtA')} style={styles.link}>FeelsOkayMan</Text>, <Text onPress={() => Linking.openURL('https://www.youtube.com/channel/UCJlnJ0y2JbeGHLhiW8QsUKw')} style={styles.link}>ForsenUpdates</Text> and <Text onPress={() => Linking.openURL('https://www.youtube.com/c/ForsenPlays')} style={styles.link}>Forsen Plays</Text> on YouTube.
                    {"\n\n"}
                    Please contact kivimasoftware@gmail.com for any issues <Image source={require('../../assets/images/smiley.png')} /> (LIDL software company <Image style={styles.emote} source={require('../../assets/images/OMEGALUL.png')} /> {")"}
                </Text>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    about: {
        alignItems: 'center',
        marginTop: 20
    },
    emote: {
        height: 18,
        width: 18,
        alignSelf: 'center'
    },
    text: {
        color: 'lightgray',
        fontWeight: 'bold',
        marginTop: 20
    },
    link: {
        color: 'turquoise'
    },
    image: {
        height: 112,
        width: 112,
    }
})

export default AboutScreen;