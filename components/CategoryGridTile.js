import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const CategoryGridTile = props => {
    return <TouchableOpacity style={{ ...styles.gridItem, backgroundColor: props.color }} onPress={props.onSelect}>
        <View style={styles.title}>
            <Text numberOfLines={2} style={styles.text}>{props.title}</Text>
        </View>
    </TouchableOpacity>
}

export default CategoryGridTile

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
        position: "relative"
    },
    title: {
        right: 0,
        bottom: 0,
        position: "absolute",
        padding: 6
    },
    text: {
        fontSize: 22
    }

})
