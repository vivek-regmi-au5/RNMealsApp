import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from "react-navigation"
import CategoryScreen from "../screens/CategoryScreen"
import CategoryMeals from "../screens/CategoryMeals"
import MealDetailsScreen from "../screens/MealsDetails"
import { Platform } from "react-native"
import { createBottomTabNavigator } from "react-navigation-tabs"
import FavouritesScreen from "../screens/FavouritesScreen"
import React from 'react'
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs"
import Colors from "../constants/colors"
import { Ionicons } from "@expo/vector-icons"

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


const MealsFavTabNavigator = Platform.OS === "android" ? createMaterialBottomTabNavigator({
    Meals: {
        screen: MealsNavigator, navigationOptions: {
            tabBarIcon: (tabIfo) => {
                return <Ionicons name="ios-restaurant" size={25} color={tabIfo.tintColor} />
            }
        }
    },
    Favourites: {
        screen: FavouritesScreen, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
            }
        }
    },
},
    {
        activeColor: Colors.primary,
        shifting: true
    }
) : createBottomTabNavigator({
    Meals: {
        screen: MealsNavigator, navigationOptions: {
            tabBarIcon: (tabIfo) => {
                return <Ionicons name="ios-restaurant" size={25} color={tabIfo.tintColor} />
            }
        }
    },
    Favourites: {
        screen: FavouritesScreen, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
            }
        }
    },
},
    {
        tabBarOptions: {
            activeTintColor: Colors.primary
        }
    }
)

export default createAppContainer(MealsFavTabNavigator)