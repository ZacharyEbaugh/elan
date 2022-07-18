import React from 'react';
import PropTypes from 'prop-types';

import { View, Pressable, Text, Alert, Dimensions, StyleSheet } from 'react-native';

import AddToDiary from './AddToDiary';

import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

const mainBackgroundColor = '#26252b';
const secondaryBackgroundColor = '#2d2e33';
const textColor = '#f67a7c';

import ProgressCircle from './FoodMacroCircle';
import { DiaryFoodObject } from './DiaryFoodObject';
import { text } from 'd3';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const numFoodItems = 3;


export function DailyFoodGroup({category, carbs, proteins, fats}) {
    const navigation = useNavigation();
    const [isPressed, setIsPressed] = useState(false);
    return (

        <View style={styles.FoodGroupBox}>

            <View style={styles.FoodGroupTitle}>
                <Text style={styles.Title}>
                    {category}
                </Text>
                <ProgressCircle carbs={carbs} proteins={proteins} fats={fats} text={0} style={styles.progressCircle}/>
            </View>

            <View style={styles.FoodList}>
                <DiaryFoodObject FoodName={'Eggs'} carbs={900} proteins={400} fats={0}/>
                <DiaryFoodObject FoodName={'Cheese'} carbs={100} proteins={400} fats={0} />
                <DiaryFoodObject FoodName={'Bagel'} carbs={300} proteins={400} fats={200} />
                <Pressable
                    onPress={() => {
                        navigation.navigate(AddToDiary, ({
                            categoryName: "Test"}))
                    }}
                    onPressOut={() => {
                        setIsPressed(current => !current);
                    }}
                    onPressIn={() => {
                        setIsPressed(current => !current);
                    }}
                    style={[styles.button]}
                >
                    <Text style={styles.plus}>
                        +
                    </Text>
                </Pressable>
            </View>
        </View>


     
    );
}


const styles = StyleSheet.create({
    FoodGroupBox: {
        width: windowWidth * 0.8,
        height: windowHeight * 0.2 + (60) * numFoodItems,
        borderRadius: windowHeight * 0.01,
        backgroundColor: mainBackgroundColor,
        alignSelf: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: windowHeight * 0.1,
        borderWidth: 2,
        borderColor: textColor,
    },

    FoodGroupTitle: {
        flexDirection: 'row',
        width: '100%',
        height: windowHeight * 0.12,
        alignItems: 'center',
    },

    FoodList: {
        width: '100%',
        height: '50%',
    },

    Title: {
        fontSize: 30,
        width: windowWidth * 0.4,
        textAlign: 'center',
        color: textColor,
    },
    
    button: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },

    plus: {
        color: textColor,
        fontSize: 50,
        fontWeight: 'normal'
        // backgroundColor: textColor,
    },

    options: {
        // marginLeft: 20,
        fontSize: 25,
    },
});
