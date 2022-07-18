import React, { startTransition } from 'react';

import { Circle, G, Line, Rect, Text as SVGText } from 'react-native-svg'

import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";


import * as shape from 'd3-shape';

import { SafeAreaView, View, Text, StyleSheet, Dimensions, ShadowPropTypesIOS } from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const mainBackgroundColor = '#26252b';
const secondaryBackgroundColor = '#2d2e33';
const textColor = '#f67a7c';



const axesSvg = { fontSize: 10, fill: '#f67a7c' };
const verticalContentInset = { top: 20, bottom: 10 }
const xAxisHeight = 10

// const WeighIns = [ [new Date('December 25')], [new Date('January 25')], 
//                    [new Date('March 25')], [new Date('April 25')], ]

// var Month = testWeighIn.getMonth();
var Month = new Date().getMonth();
// Month -= 1;
const data = [150, 180, 215, 200, 195]


const MonthLabels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"]





class ProgressGraph extends React.Component {

    

    render() {
        return (
            <SafeAreaView style={styles.container}>
                
                <SafeAreaView style={styles.ProgressBox}>
                    <Text style={styles.Title}>Progress</Text>
                    <LineChart
                        data={{
                            labels: [MonthLabels[(Month - 2) % 12], MonthLabels[(Month - 1) % 12],  MonthLabels[(Month + 1) % 12]],
                            datasets: [
                                {
                                    data: data
                                }
                            ]
                        }}
                        width={Dimensions.get("window").width * 0.85} // from react-native
                        height={220}
                        yAxisSuffix=" lbs"
                        yAxisInterval={100} // optional, defaults to 1
                        chartConfig={{
                            backgroundColor: "#26252b",
                            backgroundGradientFrom: "#26252b",
                            backgroundGradientTo: "#26252b",
                            decimalPlaces: 0, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(246,122,124, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(246,122,124, ${opacity})`,
                            style: {
                                borderRadius: 16
                            },
                            propsForDots: {
                                r: "5",
                                strokeWidth: "3",
                                stroke: "#f67a7c"
                            }
                        }}
                        bezier
                        style={{
                            marginVertical: 8,
                            borderRadius: 16
                        }}
                    />
            
                </SafeAreaView>
            </SafeAreaView>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        height: windowHeight * 0.65,
        marginTop: windowHeight * -0.09,
        justifyContent: 'center',
        alignItems: 'center',
    },

    ProgressBox: {
        width: windowWidth * 0.85,
        height: windowHeight * 0.3,
        backgroundColor: mainBackgroundColor,
        borderRadius: 15,
        flexDirection: 'column',
    },

    chartAxis: {
        flexDirection: 'row',
        marginLeft: 10,
        marginTop: 15,
    },

    Title: {
        fontSize: 28,
        marginLeft: 20,
        marginTop: 15,
        color: textColor,
    },

    ProgressChart: {
        height: windowHeight * 0.21,
        width: windowWidth * 0.7,
        marginLeft: 10,
        alignSelf: 'center',
    },

    grid: {
        stroke: textColor,
        strokeWidth: 4,
    },

});

export default ProgressGraph;