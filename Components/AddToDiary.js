import React, { useState, useEffect, startTransition } from 'react';

import { View, Text, ScrollView, StyleSheet, Dimensions, Pressable, FlatList, SafeAreaView, route } from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const mainBackgroundColor = '#26252b';
const secondaryBackgroundColor = '#2d2e33';
const textColor = '#f67a7c';

import List from "./List";
import SearchBar from "./SearchBar";
import { useNavigation, useRoute } from '@react-navigation/native';

// const categoryName = "Breakfast";

function AddToDiary ({categoryName}) {
    // const navigation = useNavigation();
    const route = useRoute();
    categoryName = route.params.categoryName;
    // const {categoryName} = route.params;
    const [searchPhrase, setSearchPhrase] = useState("");
    const [clicked, setClicked] = useState(false);
    const [fakeData, setFakeData] = useState();

    // get data from the fake api endpoint
    useEffect(() => {
        const getData = async () => {
            const apiResponse = await fetch(
                "https://my-json-server.typicode.com/kevintomas1995/logRocket_searchBar/languages"
            );
            const data = await apiResponse.json();
            setFakeData(data);
        };
        getData();
    }, []);

    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.topBar}>
                <View style={styles.titleAndBack}>
                    <Pressable
                        onPress={() => {
                            navigation.navigate('FoodDiary');
                        }}
                    >
                        <Text style={styles.backButton}>
                            back
                        </Text>
                    </Pressable>
                    <Text style={styles.title}>{route.params.categoryName}</Text>
                </View>
                {/* {!clicked && <Text style={styles.title}>Programming Languages</Text>} */}
                <SearchBar
                    searchPhrase={searchPhrase}
                    setSearchPhrase={setSearchPhrase}
                    clicked={clicked}
                    setClicked={setClicked}
                />
            </View>
            {  (

            <List
                searchPhrase={searchPhrase}
                data={fakeData}
                setClicked={setClicked}
            />

      )}
        </SafeAreaView>
    );
};

export default AddToDiary;

const styles = StyleSheet.create({
    root: {
        justifyContent: "center",
        alignItems: "center",
        height: windowHeight * 1.1,
        // marginTop: -100,
        backgroundColor: secondaryBackgroundColor,
    },

    topBar: {
        height: windowHeight * 0.25,
        marginTop: windowHeight * -0.18,
        backgroundColor: mainBackgroundColor,
        width: windowWidth,
    },

    titleAndBack: {
        marginTop: windowHeight * 0.1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
            
    },

    backButton: {
        fontSize: 20,
        color: textColor,
        marginRight: windowWidth * 0.7,
        // backgroundColor: 'white',
    },

    title: {
        // width: "100%",

        fontSize: 30,
        fontWeight: "bold",
        textAlign: 'center',
        position: 'absolute',
        color: textColor,
    },
});


