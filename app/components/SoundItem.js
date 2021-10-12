import React from 'react';
import { StyleSheet, TouchableHighlight, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Audio } from 'expo-av';

function SoundItem(props) {
    const [sound, setSound] = React.useState();
    const [playing, setPlaying] = React.useState(false);

    async function playSound() {
        if (!playing) {
            console.log('Loading Sound');
            const { sound } = await Audio.Sound.createAsync(
                require('../../assets/sounds/H.wav')
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
            console.log('OH!');
            playSound();
        }}>
            <View style={styles.container}>
                <MaterialCommunityIcons name={playing ? "stop" : "play"} size={50} style={styles.playButton} />
                <Text style={styles.text}>HEHEHEHE OH! OMEGA LYL H</Text>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
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

export default SoundItem;