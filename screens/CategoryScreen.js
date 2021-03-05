import React from 'react'
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native'

import { CATEGORIES } from "../data/dummyData"
import CategoryMeals from './CategoryMeals'


const CateoryScreen = (props) => {

    const renderItem = (itemData) => {
        return <TouchableOpacity style={styles.gridItem} onPress={() => {
            props.navigation.navigate({
                routeName: "CategoryMeals",
                params: {
                    id: itemData.item.id,
                    category: itemData.item.title
                }
            })
        }}>
            <View >
                <Text>{itemData.item.title}</Text>
            </View>
        </TouchableOpacity>
    }

    console.log("props: ", props)
    return (
        <FlatList data={CATEGORIES} renderItem={renderItem} numColumns={2} />
    )
}

CateoryScreen.navigationOptions = {
    headerTitle: "Categories",
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    }

})

export default CateoryScreen