import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import HeaderButton from "../components/HeaderButton"

const MealsDetail = (props) => {
    const meal = props.navigation.getParam("meal")
    console.log("mu meal data: ", meal.title)
    return (
        <View style={styles.screen}>
            <Text>Meals detail</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
MealsDetail.navigationOptions = navigationData => {
    const meal = navigationData.navigation.getParam("meal")
    return {
        headerTitle: meal.title,
        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Favourite" iconName="ios-star-outline" onPress={() => {
                console.log("Mark as favourite")
            }} />
        </HeaderButtons>
    }
}

export default MealsDetail