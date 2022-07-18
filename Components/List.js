// List.js
import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Pressable,
    FlatList,
    SafeAreaView,
    Dimensions
} from "react-native";

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const mainBackgroundColor = '#26252b';
const secondaryBackgroundColor = '#2d2e33';
const textColor = '#f67a7c';

// definition of the Item, which will be rendered in the FlatList
const Item = ({ name, details }) => (
    <View style={styles.item}>
        <View style={styles.nameAndDetails}>
            <Text style={styles.title}>{name}</Text>
            <Text 
                style={styles.details}
                numberOfLines={1}>{details}</Text>
        </View>
        <View style={styles.addButton}>
            <Pressable
                onPress={() => {
                    navigation.navigate('FoodDiary');
                }}
            >
                <Image
                    style={styles.addItemButton}
                    source={require('./../assets/images/addItem.png')}
                />
            </Pressable>
     
        </View>
    </View>
);

// the filter
const List = ({ searchPhrase, setClicked, data }) => {
    const renderItem = ({ item }) => {
        // when no input, show all
        if (searchPhrase === "") {
            return <Item name={item.name} details={item.details} />;
        }
        // filter of the name
        if (item.name.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
            return <Item name={item.name} details={item.details} />;
        }
        // filter of the description
        if (item.details.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
            return <Item name={item.name} details={item.details} />;
        }
    };

    return (
        <SafeAreaView style={styles.list__container}>
            <View
                onStartShouldSetResponder={() => {
                    setClicked(false);
                }}
            >
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </SafeAreaView>

    );
};

export default List;

const styles = StyleSheet.create({
    list__container: {
        height: "70%",
        width: "100%",
        backgroundColor: secondaryBackgroundColor,
    },
    item: {
        margin: 20,
        marginTop: 20,
        padding: 5,
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: 0,
        flexDirection: 'row',
        borderColor: textColor,
        backgroundColor: 'white',
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        color: 'black',
        marginBottom: 5,
    },

    details: {
        color: 'black',
        // backgroundColor: 'black',
        width: windowWidth * 0.7,
    },

    addButton: {
        width: '100%',
        alignSelf: 'center',
        position: 'absolute',
        // backgroundColor: 'black',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },

    addItemButton: {
        // position: 'absolute',
        // left: 0,
        right: 0,
    }
});