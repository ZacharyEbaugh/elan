import React, { startTransition } from 'react';

import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';


const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const mainBackgroundColor = '#26252b';
const secondaryBackgroundColor = '#2d2e33';
const textColor = '#f67a7c';

const ExerciseType = "Treadmill";

const ExerciseTime = "30"
const ExerciseTimeType = "minutes"

const CaloriesBurned = "225";
const CalorieType = "cals";

class ExerciseInstance extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.CalorieBox}>
                    <View style={styles.TrackingBox}>
                        <Text style={styles.ExerciseType}>
                            {ExerciseType}
                        </Text>
                        <Image
                            style={styles.logo}
                            source={require('./../assets/images/timeIcon.png')}
                        />
                        <Text style={styles.ExerciseTime}>
                            
                            {ExerciseTime} {ExerciseTimeType}
                        </Text>
                        <Image
                            style={styles.logo}
                            source={require('./../assets/images/burnIcon.png')}
                        />
                        <Text style={styles.CaloriesBurned}>
                            {CaloriesBurned} {CalorieType}
                        </Text>
                    </View>
                </View>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        height: windowHeight * 0.05,
        width: windowWidth * 0.8,
        marginTop: 5,
    },

    TrackingBox: {
        flexDirection: 'row',
        marginLeft: 20,
    },

    ExerciseType: {
        color: textColor,
    },

    ExerciseTime: {
        color: textColor,
        marginLeft: 10,
    },

    CaloriesBurned: {
        color: textColor,
        marginLeft: 10,
    },

    logo: {
        marginTop: 1,
        marginLeft: 20,
    }
});

export default ExerciseInstance;