
import React, { startTransition } from 'react';

import { Svg, Circle, Text as SVGText } from 'react-native-svg';

import ProgressCircle from './ProgressCircle';

import { View, Text, StyleSheet, Dimensions } from 'react-native';
import NavigationBar from './navigationBar';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const mainBackgroundColor = '#26252b';
const secondaryBackgroundColor = '#2d2e33';
const textColor = '#f67a7c';

class CalorieBox extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.CalorieBox}>
                    <Text style={styles.Title}>Calories</Text>
                    <Text style={styles.Formula}>
                        Remaining = Goal - Food + Exercise
                    </Text>
                    <View style={styles.TrackingBox}>
                        <ProgressCircle text={1}/>
                    </View>
                </View>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        // position: 'absolute',
        top: 350,
        backgroundColor: '#2d2e33',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    CalorieBox: {
        width: windowWidth * 0.85,
        height: windowHeight * 0.21,
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

export default CalorieBox;