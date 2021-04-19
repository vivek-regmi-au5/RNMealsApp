import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native'

const MealItem = (props) => {
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={props.onSelectMeal}>
                <View>
                    <View style={{ ...styles.mealsRow, ...styles.mealHeader }}>
                        <ImageBackground source={{ uri: props.image }} style={styles.bgImage}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                            </View>

                        </ImageBackground>
                    </View>
                    <View style={{ ...styles.mealsRow, ...styles.mealsDetail }}>
                        <Text>{props.duration} min</Text>
                        <Text>{props.complexity}</Text>
                        <Text>{props.affordability}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default MealItem

const styles = StyleSheet.create({
    mealsRow: {
        flexDirection: "row"
    },
    mealItem: {
        height: 200,
        width: "100%",
        marginHorizontal: 8,
        marginVertical: 5,
        backgroundColor: "#f5f5f5",
        borderRadius: 10,
        overflow: "hidden"
    },
    mealHeader: {
        height: "85%"
    },
    mealsDetail: {
        paddingHorizontal: 10,
        justifyContent: "space-between",
        alignItems: "center",
        height: "15%"

    },
    bgImage: {
        width: "100%",
        height: "100%"
    },
    titleContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12,
    },
    title: {
        fontSize: 22,
        color: "white",
        textAlign: "center"
    }
})
