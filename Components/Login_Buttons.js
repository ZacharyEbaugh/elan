import React from 'react';

import HomeScreen from './HomeScreen';
import Register from './Register';

import {
    View,
    Text,
    Pressable,
    StyleSheet,
    Dimensions,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const actionNames = ['Login', 'Sign Up'];

import { useNavigation } from '@react-navigation/native';

function LoginButton({ screenName }) {
    const navigation = useNavigation();

    return (
        <Pressable style={styles.LoginButton}
            onPress={() => navigation.navigate(screenName)}
        >
            <Text style={styles.ButtonText}>
                Login
            </Text>

        </Pressable>

    );
}

function SignUpButton({ screenName }) {
    const navigation = useNavigation();

    return (
        <Pressable style={styles.SignUpButton}
            onPress={() => navigation.navigate(screenName)}
        >
            <Text style={styles.SignUpText}>
                Sign Up
            </Text>

        </Pressable>

    );
}


class Login_SignUp extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <LoginButton screenName={HomeScreen} action={0} />
                </View>
                <View style={styles.line}></View>
                <View>
                    <SignUpButton screenName={Register} action={1} />
                </View>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'black',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },

    LoginButton: {
        height: 80,
        width: 300,
        backgroundColor: '#f67a7c',
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        zIndex: 9999,
        elevation: 9999,
    },

    SignUpButton: {
        height: 80,
        width: 300,
        borderRadius: 35,
        borderWidth: 2,
        borderColor: '#f67a7c',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
        zIndex: 9999,
        elevation: 9999,
    },

    ButtonText: {
        fontSize: 40,
        color: '#2d2e33',
    },

    SignUpText: {
        fontSize: 40,
        color: '#f67a7c',
    },

    line: {
        borderBottomColor: '#f67a7c',
        borderBottomWidth: 2,
        width: windowWidth * 0.8,
        marginBottom: 10,
        padding: 5,
    },
});


export default Login_SignUp;
