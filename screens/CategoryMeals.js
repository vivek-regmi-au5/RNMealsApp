import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const CategoryMeals = (props) => {
    const cat = props.navigation.getParam("category")
    return (
        <View style={styles.screen}>
            <Text>Cateory meals screen</Text>
            <Text>{cat}</Text>
            <Button title={"Go to Meals"} onPress={() => {
                props.navigation.navigate({
                    routeName: "MealDetail"
                })
            }} />
        </View>
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