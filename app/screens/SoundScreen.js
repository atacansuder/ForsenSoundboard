import React from 'react';
import { StyleSheet, TouchableHighlight, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Audio } from 'expo-av';

import SourcesDonation from '../data/SourcesDonation';

const sourcesDonation = SourcesDonation;

function SoundItem({ txt, src }) {
    const [sound, setSound] = React.useState();
    const [playing, setPlaying] = React.useState(false);

    console.log('Assigned ' + txt + ' from ' + src);

    async function playSound() {
        if (!playing) {
            console.log('Loading Sound');
            const { sound } = await Audio.Sound.createAsync(
                require('../../assets/sounds/' + src)
            );
            setSound(sound);

            console.log('Playing Sound');
            await sound.playAsync();
            setPlaying(true);
        }
        else {
            sound.unloadAsync();
            setPlaying(false);
        }
    }

    React.useEffect(() => {
        return sound
            ? () => {
                console.log('Unloading Sound');
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);

    return (
        <TouchableHighlight onPress={() => {
            playSound();
        }}>
            <View style={soundItemStyles.container}>
                <MaterialCommunityIcons name="play" size={50} style={soundItemStyles.playButton} />
                <Text style={soundItemStyles.text}>{txt}</Text>
            </View>
        </TouchableHighlight>
    )
}

function SoundScreen(props) {
    console.log(sourcesDonation);
    return (
        <SoundItem txt={sourcesDonation[0].name} src={sourcesDonation[0].source} />
    );
}

const styles = StyleSheet.create({

});

const soundItemStyles = StyleSheet.create({
    container: {
        borderColor: 'white',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    playButton: {
        borderWidth: 1,
        borderColor: 'black',
        color: 'lightgray'
    },
    text: {
        color: 'lightgray',
        paddingLeft: 10,
        fontSize: 16,
    }
})

export default SoundScreen;