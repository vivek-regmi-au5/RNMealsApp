import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Sample = () => {
    return (
        <View style={styles.screen}>
            <Text>Sampple data</Text>
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

export default Sample
