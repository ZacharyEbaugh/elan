import React, { startTransition } from 'react';


import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Login_SignUp_Buttons from './SplashPage_Buttons';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

class SplashPage extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={require('./../assets/images/elan_logo.png')}
                />
                <Text style={styles.TitleText}>élan</Text>
                <Text style={styles.SubTitleText}>build your diet</Text>
                <View style={styles.buttonsBackground}></View> 
                <Login_SignUp_Buttons/>    
            </View>

        );
    };
}

const styles = StyleSheet.create({
    container: {
        height: '100%', 
        backgroundColor: '#26252b',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    logo: {
        width: 300,
        height: 300,
        // left: 10,
        top: windowHeight * -0.01,
        position: 'absolute',
    },

    TitleText: {
        color: '#f67a7c',
        fontSize: 120,
        position: 'absolute',
        top: windowHeight * 0.26,
        // left: 200,

    },

    SubTitleText: {
        color: '#f67a7c',
        fontSize: 50,
        position: 'absolute',
        top: 350,
        textAlign: 'center',
    },

    buttonsBackground: {
        height: 350,
        width: windowWidth * 1.2,
        position: 'absolute',
        borderRadius: 800,
        backgroundColor: '#2d2e33',
        top: 425,
    }

});

export default SplashPage;