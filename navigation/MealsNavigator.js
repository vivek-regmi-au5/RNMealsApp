import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from "react-navigation"
import CategoryScreen from "../screens/CategoryScreen"
import CategoryMeals from "../screens/CategoryMeals"
import MealDetailsScreen from "../screens/MealsDetails"
import { Platform } from "react-native"

import Colors from "../constants/colors"

const MealsNavigator = createStackNavigator({
    Categories: CategoryScreen,
    CategoryMeals: {
        screen: CategoryMeals
    },
    MealDetail: MealDetailsScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === "android" ? Colors.primary : ""
        },
        headerTintColor: Platform.OS === "android" ? 'white' : Colors.primary
    }
})

export default createAppContainer(MealsNavigator)