import React from 'react';
import { StyleSheet, TouchableHighlight, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Audio } from 'expo-av';

import SourcesDonation from '../data/SourcesDonation';

const sourcesDonation = SourcesDonation;

function SoundItem({ txt, src }) {
    const [sound, setSound] = React.useState();
    const [playing, setPlaying] = React.useState(false);
    var iconName = playing ? 'stop' : 'play';

    //console.log('Assigned ' + txt + ' from ' + src);

    async function playSound() {
        if (!playing) {
            console.log('Loading Sound');
            const { sound } = await Audio.Sound.createAsync(
                sourcesDonation[src].source
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
                <MaterialCommunityIcons name='volume-high' size={35} style={soundItemStyles.playButton} />
                <Text style={soundItemStyles.text}>{txt}</Text>
            </View>
        </TouchableHighlight>
    )
}

function SoundScreen(props) {
    console.log(sourcesDonation);
    return (
        <SoundItem txt={sourcesDonation[0].name} src={0} />
    );
}

const styles = StyleSheet.create({

});

const soundItemStyles = StyleSheet.create({
    container: {
        borderColor: 'white',
        borderWidth: 0,
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
    },
    playButton: {
        borderWidth: 0,
        borderColor: 'black',
        color: 'lightgray',
        paddingLeft: 5,
    },
    text: {
        color: 'lightgray',
        paddingLeft: 10,
        fontSize: 16,
        fontWeight: 'bold',
    }
})

export default SoundScreen;