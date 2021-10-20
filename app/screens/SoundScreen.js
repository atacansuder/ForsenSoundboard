import React from 'react';
import { StyleSheet, TouchableHighlight, Text, View, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Audio } from 'expo-av';

import sources from '../data/sources';

const initialSounds = sources;

function SoundItem({ txt, src }) {
    const [sound, setSound] = React.useState();
    const [playing, setPlaying] = React.useState(false);
    var iconName = playing ? 'stop' : 'play';

    //console.log('Assigned ' + txt + ' from ' + src);

    async function playSound() {
        if (!playing) {
            console.log('Loading Sound');
            const { sound } = await Audio.Sound.createAsync(
                src
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

function SoundScreen({ route, navigation }) {
    const filteredSounds = initialSounds.filter(s => s.category === route.params.category);

    return (

        //<SoundItem txt={sourcesDonation[0].name} src={0} />
        /*          OLD BACK ARROW
                    <View style={styles.backButtonDiv}>
                <TouchableHighlight onPress={() => console.log('back button pressed')}>
                    <MaterialCommunityIcons size={50} color='lightgray' name='arrow-left' />
                </TouchableHighlight>
            </View>
        */
        <View>

            <FlatList style={{ backgroundColor: '#202124' }} data={filteredSounds}
                keyExtractor={filteredSounds => filteredSounds.name}
                renderItem={({ item }) => <SoundItem txt={item.name} src={item.source} />}
            ></FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    backButtonDiv: {
        width: 50,
    }
});

const soundItemStyles = StyleSheet.create({
    container: {
        backgroundColor: '#202124',
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