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

export default function FoodMacroLine ({carbs, proteins, fats}) {

    // Calorie inputs
    const calories = carbs + proteins + fats;

    // Calculate percentage of calories from macro to total calories
    var carbPercent = carbs / (calories);
    var proteinPercent = proteins / (calories);
    var fatPercent = fats / (calories);
    const totalPercent = carbPercent + proteinPercent + fatPercent;

    if (totalPercent > 1) {
        carbPercent = carbPercent / totalPercent;
        proteinPercent = proteinPercent / totalPercent;
        fatPercent = fatPercent / totalPercent;
    }
        return (
            <View>
                <Svg width={windowWidth} height={40} viewBox="-20 -70 100 100">
                    <Line
                        x1={windowWidth * -0.8}
                        x2={windowWidth * 0.12}
                        stroke={secondaryBackgroundColor}
                        strokeWidth="25"
                        strokeLinecap="round" />

                    <Line
                        x1={(windowWidth * -0.8) + proteinPercent * (windowWidth * 0.92) + carbPercent * (windowWidth * 0.92)}
                        x2={carbPercent * (windowWidth * 0.92) + proteinPercent * (windowWidth * 0.92) + (windowWidth * -0.8) + fatPercent * (windowWidth * 0.92)}

                        stroke={fatColor}
                        strokeWidth="25"
                        strokeLinecap="round" />
                    <Line
                        x1={(windowWidth * -0.8) + carbPercent * (windowWidth * 0.92)}
                        x2={carbPercent * (windowWidth * 0.92) + (windowWidth * -0.8) + proteinPercent * (windowWidth * 0.92)}

                        stroke={proteinColor}
                        strokeWidth="25"
                        strokeLinecap="round" />
                    <Line
                        x1={windowWidth * -0.8}
                        x2={(windowWidth * -0.8) + carbPercent * (windowWidth * 0.92)}

                        stroke={carbsColor}
                        strokeWidth="25"
                        strokeLinecap="round" />

                 </Svg>
            </View>
        );
    };