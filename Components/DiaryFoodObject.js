import React from 'react';
import PropTypes from 'prop-types';

import { View, Pressable, Text, Alert, Dimensions, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

const mainBackgroundColor = '#26252b';
const secondaryBackgroundColor = '#2d2e33';
const textColor = '#f67a7c';

import { text } from 'd3';
import { Line } from 'react-native-svg';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import FoodMacroLine from './FoodMacroLine';

export function DiaryFoodObject({ FoodName, carbs, proteins, fats }) {
    const navigation = useNavigation();
    const [isPressed, setIsPressed] = useState(false);
    
    const numCalories = carbs + proteins + fats;

    return (

        <Pressable
            onPress={() => {
                navigation.navigate('Settings');
            }}
            onPressOut={() => {
                setIsPressed(current => !current);
            }}
            onPressIn={() => {
                setIsPressed(current => !current);
            }}
            style={[styles.FoodButton, isPressed && styles.FoodButtonUpdate]}
        >
            <View style={styles.FoodObject}>
                <Text 
                    style={styles.FoodName}
                    numberOfLines={1}>
                    {FoodName}
                </Text>
                <View style={styles.nutrition}>
                    <Text
                        style={styles.FoodCalories}
                        numberOfLines={1}>
                        {numCalories}
                    </Text>
                    <FoodMacroLine carbs={carbs} proteins={proteins} fats={fats}/>
                    
                </View>
            </View>
        </Pressable>
    



    );
}


const styles = StyleSheet.create({
    FoodButton: {
        width: windowWidth * 0.79,
        height: 60,
        borderBottomWidth: 2,
        borderBottomColor: textColor,
        justifyContent: 'center',
    },

    FoodButtonUpdate: {
        width: windowWidth * 0.79,
        height: 60,
        backgroundColor: secondaryBackgroundColor,
        borderBottomWidth: 2,
        borderBottomColor: textColor,

    },

    FoodObject: {
        flexDirection: 'row',
    },

    FoodName: {
        fontSize: 25,
        marginLeft: 10,
        color: textColor,
    },

    nutrition: {
        width: windowWidth * 0.6,
        flexDirection: 'column',
        position: 'absolute',
        right: -10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    FoodCalories: {
        fontSize: 25,
        position: 'absolute',
        top: -10,
        color: textColor,
        // right: 0,
        // width: windowWidth * 0.15
    },
});