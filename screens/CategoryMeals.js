import React from 'react'
import { View, Text, StyleSheet, Button, FlatList } from 'react-native'
import { MEALS } from "../data/dummyData"
import MealItem from "./MealItem"

const CategoryMeals = (props) => {
    const id = props.navigation.getParam("id")
    let mealsData = MEALS.filter(item => item.categoryIds.indexOf(id) >= 0)
    const renderMealItem = (itemData) => {
        return <MealItem
            title={itemData.item.title}
            affordability={itemData.item.affordability}
            complexity={itemData.item.complexity}
            duration={itemData.item.duration}
            image={itemData.item.imageUrl}
            onSelectMeal={() => {
                props.navigation.navigate({
                    routeName: "MealDetail", params: {
                        meal: itemData.item
                    }
                })
            }} />
    }
    return (
        <FlatList data={mealsData} keyExtractor={(item, index) => item.id} renderItem={renderMealItem} />
    )
}

CategoryMeals.navigationOptions = (data) => {
    const header = data.navigation.getParam("category")
    return {
        headerTitle: header
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default CategoryMeals