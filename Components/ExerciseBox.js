import React, { startTransition } from 'react';

import { View, Text, Image, StyleSheet, Alert, Pressable, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ExerciseInstance from './ExerciseInstance';
import ExerciseButton from './ExerciseButton';
import Login from './Login';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const mainBackgroundColor = '#26252b';
const secondaryBackgroundColor = '#2d2e33';
const textColor = '#f67a7c';

const numExercises = 1;


class ExerciseBox extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.ExerciseBox}>
                    <Text style={styles.Title}>Exercise</Text>
                   
                    <View style={styles.TrackingBox}>
                        <ExerciseInstance/>
                        
                    </View>
                </View>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        // height: windowHeight * (numExercises / 10),
        backgroundColor: '#2d2e33',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: windowHeight * 0.5,
        // bottom: 1000,
    },

    ExerciseBox: {
        width: windowWidth * 0.85,
        height: windowHeight * (numExercises / 10),
        backgroundColor: mainBackgroundColor,
        borderRadius: 15,
    },

    Title: {
        fontSize: 28,
        marginLeft: 20,
        marginTop: 15,
        color: textColor,
    },

    Formula: {
        fontSize: 13,
        marginLeft: 20,
        color: textColor,
    }
});

export default ExerciseBox;