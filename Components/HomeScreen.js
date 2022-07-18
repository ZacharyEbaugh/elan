import React, { startTransition } from 'react';

import { View, Text, ScrollView, StyleSheet, Dimensions, FlatList, SafeAreaView } from 'react-native';
import NavigationBar from './navigationBar';

import CalorieBox from './CalorieBox';
import ExerciseBox from './ExerciseBox'
import ExerciseButton from './ExerciseButton';
import ProgressGraph from './ProgressGraph';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const mainBackgroundColor = '#26252b';
const secondaryBackgroundColor = '#2d2e33';
const textColor = '#f67a7c';

const userName = 'Zachary'

class HomeScreen extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <ScrollView 
                    style={styles.scroll}
                    contentContainerStyle={{flexGrow: 2, justifyContent: 'center'}}
                    >
               
       
                    <View style={styles.topBar}>
                        <View style={styles.profilePic}></View>
                        <Text style={styles.message}>Welcome back,{'\n'}{userName}</Text>
                    </View>
                    <CalorieBox />
                 
                    <ExerciseButton/>
                    <ExerciseBox/>
                    <ProgressGraph/>
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
        height: windowHeight,
        backgroundColor: '#2d2e33',
        flex: 1,
    },

    contentScroll: {
        // width: windowWidth,
        height: windowHeight * 1.5,
        flexGrow: 1,
        alignSelf: 'center',
        justifyContent: 'center', 
    },

    container: {
        height: windowHeight,
        width: windowWidth,
        backgroundColor: '#2d2e33',
        flexDirection: 'column',
        flexGrow: 1,
    },

    test: {
        fontSize: 50,
        textAlign: 'center',
    },

    topBar: {
        height: windowHeight * 0.6,
        width: windowWidth * 1.3,
        position: 'absolute',
        top: windowHeight * -0.25,
        flexDirection: 'row',
        backgroundColor: '#26252b',
        borderRadius: windowHeight * 2,
        justifyContent: 'center',
        alignSelf: 'center',
    },

    NavigationBar: {
        justifyContent: 'flex-end',
    },

    message: {
        fontSize: 32,
        color: '#f67a7c',
        position: 'absolute',
        top: 320,
        right: 85,
    },

    profilePic: {
        width: 100,
        height: 100,
        backgroundColor: 'white',
        position: 'absolute',
        top: 310,
        left: 85,

        borderRadius: 200,
    },

    SubTitleText: {
        color: 'white',
        fontSize: 50,
        position: 'absolute',
        top: 250,
        textAlign: 'center',
    },

});

export default HomeScreen;