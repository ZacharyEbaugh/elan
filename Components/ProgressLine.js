import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import { Svg, Circle, Line, Text as SVGText } from 'react-native-svg'

const mainBackgroundColor = '#26252b';
const secondaryBackgroundColor = '#2d2e33';
const textColor = '#f67a7c';
const carbsColor = '#369997';
const proteinColor = '#f67a7c';
const fatColor = 'white';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

// Calorie inputs
const calories = 2500;
const exerciseCalories = 0;
const carbs = 1000;
const proteins = 800;
const fats = 700;
const foodCalories = carbs + proteins + fats;
const remainingCalories = calories - foodCalories + exerciseCalories;

// Calculate percentage of calories from macro to total calories
var carbPercent = carbs / (calories + exerciseCalories);
var proteinPercent = proteins / (calories + exerciseCalories);
var fatPercent = fats / (calories + exerciseCalories);
const totalPercent = carbPercent + proteinPercent + fatPercent;

if (totalPercent > 1){
    carbPercent = carbPercent / totalPercent;
    proteinPercent = proteinPercent / totalPercent;
    fatPercent = fatPercent / totalPercent;
}

// Calculate rotation amount to keep start of progress bar inline with end of last one
const carbProgress = (carbs / (calories + exerciseCalories)) * 360;
const proteinProgress = (proteins / (calories + exerciseCalories)) * 360;
const fatProgress = carbProgress + proteinProgress;

function DisplayPercentages({totalPercent}) {
    if (carbPercent > 0.1 && proteinPercent > 0.1 && fatPercent > 0.1) {
        return (
            <View style={styles.percentages}>
                <Svg width={windowWidth} height={windowHeight * 0.2} viewBox="-32 -50 90 200">
                    <SVGText
                        fill={textColor}
                        fontSize="20"
                        x={((windowWidth * -0.8) + (windowWidth * -0.8) + carbPercent * (windowWidth * 0.92)) / 2}
                        y={30}
                        textAnchor="middle"
                    >
                        {Math.round(carbPercent * 100)}%
                    </SVGText>
                    <SVGText
                        fill={textColor}
                        fontSize="20"
                        x={((windowWidth * -0.8) + carbPercent * (windowWidth * 0.92) + carbPercent * (windowWidth * 0.92) + (windowWidth * -0.8) + proteinPercent * (windowWidth * 0.92)) / 2}
                        y={30}
                    >
                        {Math.round(proteinPercent * 100)}%
                    </SVGText>
                    <SVGText
                        fill={textColor}
                        fontSize="20"
                        x={((windowWidth * -0.8) + proteinPercent * (windowWidth * 0.92) + carbPercent * (windowWidth * 0.92) + carbPercent * (windowWidth * 0.92) + proteinPercent * (windowWidth * 0.92) + (windowWidth * -0.8) + fatPercent * (windowWidth * 0.92)) / 2}
                        y={30}
                    >
                        {Math.round(fatPercent * 100)}%
                    </SVGText>
                </Svg>
            </View>
        );
    }
    else {
        return(
            <Svg></Svg>
        );
    }
}


class ProgressCircle extends React.Component {
    render() {
        return (
            <View styles={styles.container}>
                <Svg width={windowWidth} height={windowHeight * 0.2} viewBox="-100 -50 200 200">
                    <SVGText
                        fill={textColor}
                        fontSize="25"
                        x={-210}
                        y={-25}
                        textAnchor="middle"
                    >
                        {remainingCalories}
                    </SVGText>
                    <SVGText
                        fill={textColor}
                        fontSize="25"
                        x={-150}
                        y={-25}
                        // textAnchor="middle"
                    >
                        Remaining
                    </SVGText>
                    
                    <Line 
                        x1={windowWidth * -0.8} 
                        x2={windowWidth * 0.12} 
                        stroke={secondaryBackgroundColor}
                        strokeWidth="10"
                        strokeLinecap="round" />
                        
                    <Line
                        x1={(windowWidth * -0.8) + proteinPercent * (windowWidth * 0.92) + carbPercent * (windowWidth * 0.92)}
                        x2={carbPercent * (windowWidth * 0.92) + proteinPercent * (windowWidth * 0.92) + (windowWidth * -0.8) + fatPercent * (windowWidth * 0.92)}

                        stroke={fatColor}
                        strokeWidth="10"
                        strokeLinecap="round" />
                    <Line
                        x1={(windowWidth * -0.8) + carbPercent * (windowWidth * 0.92)}
                        x2={carbPercent * (windowWidth * 0.92) + (windowWidth * -0.8) + proteinPercent * (windowWidth * 0.92)}

                        stroke={proteinColor}
                        strokeWidth="10"
                        strokeLinecap="round" />
                    <Line
                        x1={windowWidth * -0.8}
                        x2={(windowWidth * -0.8) + carbPercent * (windowWidth * 0.92)}

                        stroke={carbsColor}
                        strokeWidth="10"
                        strokeLinecap="round" />
                    
                    <DisplayPercentages carbPercent={carbPercent} proteinPercent={proteinPercent} fatPercent={fatPercent} />
                </Svg>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        height: windowHeight,
        height: 230,
        position: 'absolute',
        // backgroundColor: 'black'
    },

    goalCalories: {
        position: 'absolute',
        left: 150,
        top: 20,
        color: textColor,
    },

    percentages: {
        zIndex: 9999,
    },

    remainingCalories: {
        position: 'absolute',
        left: 150,
        top: 45,
        color: textColor,
    },

    exerciseCalories: {
        position: 'absolute',
        left: 150,
        top: 70,
        color: textColor,
    }
});
export default ProgressCircle;