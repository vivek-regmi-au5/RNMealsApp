import React from 'react'
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native'

import CategoryGridTile from "../components/CategoryGridTile"
import { CATEGORIES } from "../data/dummyData"
import CategoryMeals from './CategoryMeals'


const CateoryScreen = (props) => {

    const renderItem = (itemData) => {
        return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onSelect={() => {
            props.navigation.navigate({
                routeName: "CategoryMeals",
                params: {
                    id: itemData.item.id,
                    category: itemData.item.title,
                    color: itemData.item.title
                }
            })
        }} />
    }
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


})

export default CateoryScreen