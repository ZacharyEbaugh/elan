import React from 'react';

import HomeScreen from './HomeScreen';
import Register from './Register';
import FoodDiary from './FoodDiary';

import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
    View,
    Text,
    Image,
    Alert,
    Pressable,
    StyleSheet,
    Dimensions,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const actionNames = ['Login', 'Sign Up'];

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="HomeScreen" component={HomeScreen}/>
            <Tab.Screen name="Login" component={Login} />
            <Tab.Screen name="Register" component={Register} />
        </Tab.Navigator>
    );
}


function DashboardButton({ screenName }) {
    const navigation = useNavigation();

    return (
        <Pressable style={styles.Button}
            onPress={() => navigation.navigate(screenName)}
        >
            <Image
                style={styles.DashImage}
                source={require('./../assets/images/dash.png')}
            />
            <Text style={styles.ButtonText}>
                Dashboard
            </Text>

        </Pressable>

    );
}

function DiaryButton({ screenName }) {
    const navigation = useNavigation();

    return (
        <Pressable style={styles.Button}
            onPress={() => [navigation.navigate(screenName)]}
        >
            <Image
                style={styles.DiaryImage}
                source={require('./../assets/images/diary.png')}
            />
            <Text style={styles.ButtonText}>
                Diary
            </Text>

        </Pressable>

    );
}

function AccountButton({ screenName }) {
    const navigation = useNavigation();

    return (
        <Pressable style={styles.Button}
            onPress={() => navigation.navigate(screenName)}
        >
            <Image
                style={styles.AccountImage}
                source={require('./../assets/images/account.png')}
            />
            <Text style={styles.ButtonText}>
                Account
            </Text>

        </Pressable>

    );
}


class NavigationBar extends React.Component {
    render() {
        return (
            <View style={styles.page}>
                <View style={styles.container}>
                    <View>
                        <DashboardButton screenName={HomeScreen}/>
                    </View>
                    <View>
                        <DiaryButton screenName={FoodDiary}/>
                    </View>
                    <View>
                        <AccountButton screenName={FoodDiary}/>
                    </View>
                    {/* <Tabs/> */}
                </View>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    page: {
        height: windowHeight * 0.1,
        width: windowWidth,
        position: 'absolute',
        // flex: 1,
    },
    
    container: {
        height: windowHeight * 0.13,
        width: windowWidth,
        backgroundColor: 'black',
        flexDirection: 'row',
        position: 'absolute',
        justifyContent: 'center',
        bottom: 0,
    },

    Button: {
        height: '100%',
        width: windowWidth * 0.33333,
        backgroundColor: '#26252b',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
        elevation: 9999,
    },

    DashImage: {
        height: 40,
        width: 40,
        bottom: 15,
    },

    DiaryImage: {
        height: 50,
        width: 50,
        bottom: 20,
    },

    AccountImage: {
        height: 40,
        width: 35,
        resizeMode: 'cover',
        bottom: 11,
    },

    ButtonText: {
        position: 'absolute',
        bottom: 30,
        marginTop: 10,
        fontSize: 15,
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


export default NavigationBar;
