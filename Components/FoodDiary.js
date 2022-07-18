import React, { startTransition } from 'react';

import { View, Text, ScrollView, StyleSheet, Dimensions, FlatList, SafeAreaView } from 'react-native';

import NavigationBar from './navigationBar';
import ProgressLine from './ProgressLine';
import { DailyFoodGroup } from './FoodList';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const mainBackgroundColor = '#26252b';
const secondaryBackgroundColor = '#2d2e33';
const textColor = '#f67a7c';

const userName = 'Zachary'


const RemainingCalories = '1500';

class FoodDiary extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    style={styles.scroll}
                    contentContainerStyle={{ flexGrow: 1}}
                >


                    <View style={styles.topBar}>
                        <Text style={styles.message}>Calories Remaining</Text>
                        <View style={styles.calorieFormula}>
                            <Text style={styles.GoalCals}>2,100{'\n'}{'\n'}Goal</Text>
                            <Text style={styles.math}>-</Text>
                            <Text style={styles.GoalCals}>750{'\n'}{'\n'}Food</Text>
                            <Text style={styles.math}>+</Text>
                            <Text style={styles.GoalCals}>150{'\n'}{'\n'}Exercise</Text>
                        </View>
                        <View style={styles.remainingDescription}>
                            <ProgressLine/>
                        </View>
                    </View>
                    
                    <DailyFoodGroup category={'Breakfast'} carbs={600} proteins={200} fats={50}/>

                    <DailyFoodGroup category={'Lunch'} carbs={600} proteins={200} fats={50} />

                    <DailyFoodGroup category={'Dinner'} carbs={600} proteins={200} fats={50} />
                    
                    <DailyFoodGroup category={'Snacks'} carbs={600} proteins={200} fats={50} />

                    <View style={styles.padding}></View>
                </ScrollView>
                <View style={styles.NavigationBar}>
                    <NavigationBar />
                </View>
                
            </View >


        );
    };
}

const styles = StyleSheet.create({
    scroll: {
        width: windowWidth,
        height: windowHeight * 2,
        backgroundColor: '#2d2e33',
        flex: 1,
    },

    contentScroll: {
        height: windowHeight * 3,
        flexGrow: 1,
        alignSelf: 'center',
        justifyContent: 'center',
    },

    container: {
        height: windowHeight,
        width: windowWidth,
        backgroundColor: '#2d2e33',
        flexDirection: 'column',
        flexGrow: 0,
    },

    topBar: {
        height: windowHeight * 0.45,
        width: windowWidth,
        // position: 'absolute',
        top: windowHeight * -0.1,
        marginBottom: -20,
        flexDirection: 'column',
        backgroundColor: '#26252b',
        borderRadius: windowHeight * 0.03,
        justifyContent: 'center',
        alignItems: 'center',

    },

    NavigationBar: {
        justifyContent: 'flex-end',
    },

    message: {
        fontSize: 37,
        color: '#f67a7c',
        marginTop: 150,
        fontWeight: 'bold',
    },

    calorieFormula: {
        height: windowHeight * 0.1,
        width: windowWidth,
        justifyContent: 'center',
        flexDirection: 'row',
    },

    GoalCals: {
        color: textColor,
        fontSize: 17,
        padding: 10,
        justifyContent: 'center',
        textAlign: 'center',
    },

    math: {
        color: textColor,
        fontSize: 25,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },

    remainingDescription: {
        height: windowHeight * 0.1,
        width: windowWidth,
        // justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        // backgroundColor: 'black',
    },

    NumberOfCalsRemaining: {
        color: textColor,
        fontSize: 25,
    },

    padding: {
        height: windowHeight * 0.1,
    }

});

export default FoodDiary;