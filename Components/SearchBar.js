// SearchBar.js
import React from "react";
import { StyleSheet, TextInput, Text, View, Pressable, Keyboard, Button, Dimensions } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const mainBackgroundColor = '#26252b';
const secondaryBackgroundColor = '#2d2e33';
const textColor = '#f67a7c';

const SearchBar = ({ clicked, searchPhrase, setSearchPhrase, setClicked }) => {
    return (
        <View style={styles.container}>
            <View
                style={
                    clicked
                        ? styles.searchBar__clicked
                        : styles.searchBar__unclicked
                }
            >
                {/* search Icon */}
                <Feather
                    name="search"
                    size={20}
                    color="black"
                    style={{ marginLeft: 1 }}
                />
                {/* Input field */}
                <TextInput
                    style={styles.input}
                    placeholder="Search"
                    value={searchPhrase}
                    onChangeText={setSearchPhrase}
                    onFocus={() => {
                        setClicked(true);
                    }}
                />
                {/* cross Icon, depending on whether the search bar is clicked or not */}
                {clicked && (
                    <Entypo name="cross" size={10} color="black" style={{ padding: 1 }} onPress={() => {
                        setSearchPhrase("")
                    }} />
                )}
            </View>
            {/* cancel button, depending on whether the search bar is clicked or not */}
            {clicked && (
                <View>
                    <Pressable
                        onPress={() => {
                            Keyboard.dismiss();
                            setClicked(false);
                        }}
                    >
                        <Text style={styles.cancelButton}>
                            Cancel
                        </Text>
                    </Pressable>
                </View>
            )}
        </View>
    );
};
export default SearchBar;

// styles
const styles = StyleSheet.create({
    container: {
        margin: 25,
        alignSelf: 'center',
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        width: "100%",
        backgroundColor: mainBackgroundColor

    },
    searchBar__unclicked: {
        padding: 10,
        flexDirection: "row",
        width: "90%",
        backgroundColor: "white",
        borderRadius: 15,
        alignItems: "center",
        marginLeft: windowWidth * 0.05,
    },
    searchBar__clicked: {
        padding: 10,
        flexDirection: "row",
        width: "70%",
        backgroundColor: "white",
        borderRadius: 15,
        alignSelf: 'center',
        alignItems: "center",
        // justifyContent: "space-evenly",
        marginLeft: windowWidth * 0.05,
    },
    input: {
        fontSize: 20,
        marginLeft: 10,
        width: "90%",
    },

    cancelButton: {
        color: textColor,
        fontSize: 20,
        marginLeft: 10,
        // backgroundColor: 'black',
    }
});