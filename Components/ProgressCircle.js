import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Svg, Circle, Text as SVGText } from 'react-native-svg'

const mainBackgroundColor = '#26252b';
const secondaryBackgroundColor = '#2d2e33';
const textColor = '#f67a7c';
const carbsColor = '#369997';
const proteinColor = '#f67a7c';
const fatColor = 'white';

const CIRCLE_LENGTH = 220;
const radius = CIRCLE_LENGTH / (2 * Math.PI);

// Calorie inputs
const calories = 2500;
const exerciseCalories = 1000;
const carbs = 1200;
const proteins = 1200;
const fats = 1100;
const foodCalories = carbs + proteins + fats;
const remainingCalories = calories - foodCalories + exerciseCalories;

// Calculate percentage of calories from macro to total calories
const carbPercent = 1 + carbs / (calories + exerciseCalories);
const proteinPercent = 1 + proteins / (calories + exerciseCalories);
const fatPercent = 1 + fats / (calories + exerciseCalories);

// Calculate rotation amount to keep start of progress bar inline with end of last one
const carbProgress = (carbs / (calories + exerciseCalories)) * 360;
const proteinProgress = (proteins / (calories + exerciseCalories)) * 360;
const fatProgress = carbProgress + proteinProgress;

function ProgressCircle ({carbs, proteins, fats, text, style}){

    // render() {
        if (text == 1) {
            return (
                <View styles={styles.container}>
                    <Svg width={CIRCLE_LENGTH} height={CIRCLE_LENGTH} viewBox="-70 -60 230 230">
                        <SVGText
                            fill={textColor}
                            fontSize="18"
                            x={0}
                            y={0}
                            textAnchor="middle"
                        >
                            {remainingCalories}
                        </SVGText>
                        <SVGText
                            fill={textColor}
                            fontSize="10"
                            x={0}
                            y={12}
                            textAnchor="middle"
                        >
                            Remaining
                        </SVGText>
                        <Circle
                            cx={'0'}
                            cy={'0'}
                            r={radius}
                            stroke={secondaryBackgroundColor}
                            strokeWidth={'10'}

                        />
                        <Circle style={styles.progressCarbs}
                            cx={'0'}
                            cy={'0'}
                            r={radius}
                            stroke={carbsColor}
                            strokeWidth={'9'}
                            strokeDasharray={[CIRCLE_LENGTH * carbPercent, CIRCLE_LENGTH]}
                            strokeDashoffset={CIRCLE_LENGTH}
                            strokeLinecap={'round'}
                        />
                        <Circle style={styles.progressProteins}
                            cx={'0'}
                            cy={'0'}
                            r={radius}
                            stroke={proteinColor}
                            strokeWidth={'9'}
                            strokeDasharray={[CIRCLE_LENGTH * proteinPercent, CIRCLE_LENGTH]}
                            strokeDashoffset={CIRCLE_LENGTH}
                            strokeLinecap={'round'}
                        />
                        <Circle style={styles.progressFats}
                            cx={'0'}
                            cy={'0'}
                            r={radius}
                            stroke={fatColor}
                            strokeWidth={'9'}
                            strokeDasharray={[CIRCLE_LENGTH * fatPercent, CIRCLE_LENGTH]}
                            strokeDashoffset={CIRCLE_LENGTH}
                            strokeLinecap={'round'}
                        />
                    </Svg>
                    <Text style={styles.goalCalories}>
                        Goal{'\t\t'}{calories}
                    </Text>
                    <Text style={styles.remainingCalories}>
                        Food{'\t\t'}{foodCalories}
                    </Text>
                    <Text style={styles.exerciseCalories}>
                        Exercise{'\t\t'}{exerciseCalories}
                    </Text>
                </View>
            );
        }
        else {
            return (
                <View styles={styles.container}>
                    <Svg width={CIRCLE_LENGTH} height={CIRCLE_LENGTH} viewBox="-70 -60 230 230">
                        <SVGText
                            fill={textColor}
                            fontSize="18"
                            x={0}
                            y={0}
                            textAnchor="middle"
                        >
                            {remainingCalories}
                        </SVGText>
                        <SVGText
                            fill={textColor}
                            fontSize="10"
                            x={0}
                            y={12}
                            textAnchor="middle"
                        >
                            Remaining
                        </SVGText>
                        <Circle
                            cx={'0'}
                            cy={'0'}
                            r={radius}
                            stroke={secondaryBackgroundColor}
                            strokeWidth={'10'}

                        />
                        <Circle style={styles.progressCarbs}
                            cx={'0'}
                            cy={'0'}
                            r={radius}
                            stroke={carbsColor}
                            strokeWidth={'9'}
                            strokeDasharray={[CIRCLE_LENGTH * carbPercent, CIRCLE_LENGTH]}
                            strokeDashoffset={CIRCLE_LENGTH}
                            strokeLinecap={'round'}
                        />
                        <Circle style={styles.progressProteins}
                            cx={'0'}
                            cy={'0'}
                            r={radius}
                            stroke={proteinColor}
                            strokeWidth={'9'}
                            strokeDasharray={[CIRCLE_LENGTH * proteinPercent, CIRCLE_LENGTH]}
                            strokeDashoffset={CIRCLE_LENGTH}
                            strokeLinecap={'round'}
                        />
                        <Circle style={styles.progressFats}
                            cx={'0'}
                            cy={'0'}
                            r={radius}
                            stroke={fatColor}
                            strokeWidth={'9'}
                            strokeDasharray={[CIRCLE_LENGTH * fatPercent, CIRCLE_LENGTH]}
                            strokeDashoffset={CIRCLE_LENGTH}
                            strokeLinecap={'round'}
                        />
                    </Svg>
                </View>
            );
        }
    };
// }

const styles = StyleSheet.create({
    container: {
        width: 230,
        height: 230,
        position: 'absolute',
        right: 100,
    },
    
    progressCarbs: {
        rotation: 0,
    },

    progressFats: {
        rotation: fatProgress,
    },

    progressProteins: {
        rotation: carbProgress,
    },

    goalCalories: {
        position: 'absolute',
        left: 150,
        top: 20,
        color: textColor,
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