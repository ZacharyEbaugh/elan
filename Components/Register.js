import React, { startTransition } from 'react';
import PropTypes from 'prop-types';

import RegisterButtons from './Register_Buttons';

import { View, Text, Image, TextInput, Pressable, StyleSheet, Dimensions } from 'react-native';

import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function ForgotPassword({ screenName }) {
    const navigation = useNavigation();

    return (
        <Pressable style={styles.ForgotPassword}
            onPress={() => navigation.navigate(screenName)}
        >
            <Text style={styles.ForgotPasswordText}>
                Forgot Password?
            </Text>

        </Pressable>

    );
}

class Register extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={require('./../assets/images/elan_logo.png')}
                />
                <Text style={styles.Title}> élan</Text>
                <View style={styles.inputBox}>
                    <View style={styles.Name}>
                        <TextInput style={styles.NameInput}></TextInput>
                    </View>
                    <Text style={styles.NameLabel}>Name</Text>
                    <View style={styles.Email}>
                        <TextInput style={styles.EmailInput}></TextInput>
                    </View>
                    <Text style={styles.EmailLabel}>Email Address</Text>
                    <View style={styles.Password}>
                        <TextInput style={styles.PasswordInput}></TextInput>
                    </View>
                    <Text style={styles.PasswordLabel}>Password</Text>
                    <ForgotPassword style={styles.forgotButton}></ForgotPassword>
                    <RegisterButtons />

                </View>
            </View>

        );
    };
}


const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#26252b',
        flexDirection: 'column',
    },

    logo: {
        width: 200,
        height: 200,
        left: -20,
        top: 30,
        position: 'absolute',
    },

    Title: {
        fontSize: 90,
        color: '#f67a7c',
        marginTop: windowHeight * 0.09,
        marginLeft: 150,
    },
    
    inputBox: {
        height: windowHeight * 0.8,
        width: windowWidth * 1.9,
        borderRadius: windowWidth * 2,
        marginTop: windowHeight * 0.035,
        alignSelf: 'center',
        backgroundColor: '#2d2e33',
        alignItems: 'center',
    },

    Name: {
        width: windowWidth * 0.8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 9,
        borderWidth: 2,
        borderColor: '#f67a7c',
        marginTop: 50,
    },

    NameLabel: {
        fontSize: 20,
        right: 80,
        bottom: 84,
        padding: 5,
        color: '#f67a7c',
        backgroundColor: '#2d2e33',
    },

    NameInput: {
        flex: 1,
        fontSize: 35,
        padding: 10,
        marginLeft: 10,
        color: '#f67a7c',
    },


    Email: {
        width: windowWidth * 0.8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 9,
        borderWidth: 2,
        borderColor: '#f67a7c',
    },

    EmailLabel: {
        fontSize: 20,
        right: 50,
        bottom: 84,
        padding: 5,
        color: '#f67a7c',
        backgroundColor: '#2d2e33',
    },

    EmailInput: {
        flex: 1,
        fontSize: 35,
        padding: 10,
        marginLeft: 10,
        color: '#f67a7c',
    },

    Password: {
        width: windowWidth * 0.8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 9,
        borderWidth: 2,
        borderColor: '#f67a7c',
    },

    PasswordInput: {
        flex: 1,
        fontSize: 35,
        padding: 10,
        marginLeft: 10,
        color: '#f67a7c',
    },

    PasswordLabel: {
        fontSize: 20,
        right: 70,
        bottom: 84,
        padding: 5,
        color: '#f67a7c',
        backgroundColor: '#2d2e33',
    },

    ForgotPassword: {
        bottom: 29,
        left: 80,
    },

    ForgotPasswordText: {
        color: '#f67a7c',
    }
});

export default Register;