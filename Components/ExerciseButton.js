import React from 'react';

import HomeScreen from './HomeScreen';
import Login from './Login';

import {
    View,
    Image,
    Pressable,
    StyleSheet,
    Dimensions,
    Alert,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const actionNames = ['Login', 'Sign Up'];

import { useNavigation } from '@react-navigation/native';

function AddExercise({ screenName }) {
    const navigation = useNavigation();

    return (
        <Pressable style={styles.AddExercise}
            onPress={() => Alert.alert("TEST")}
        >
            <Image
                style={styles.logo}
                source={require('./../assets/images/plus.png')}

            />

        </Pressable>

    );
}



class ExerciseButton extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <AddExercise screenName={Login}/>
                </View>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        height: windowHeight * 0.05,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        // marginTop: windowHeight * 1.9,
        zIndex: 9999,
    },

    AddExercise: {
        height: 30,
        width: 30,
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: windowHeight * 0.11,
        left: 20,
        zIndex: 9999,
        // elevation: 9999,
        // marginTop: windowHeight * 1.543,
        marginLeft: windowWidth * 0.7,
    },

    logo: {
        position: 'absolute',
    },
});


export default ExerciseButton;
