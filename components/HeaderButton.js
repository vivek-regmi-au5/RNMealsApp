import React from 'react'
import { HeaderButton } from "react-navigation-header-buttons"
import { Ionicons } from "@expo/vector-icons"
import { Platform } from "react-native"
import Colors from "../constants/colors"

const CustomHeaderButton = (props) => {
    return (
        <HeaderButton {...props}
            IconComponent={Ionicons}
            iconSize={23}
            color={Platform.os === "android" ? "white" : Colors.primary} />
    )
}

export default CustomHeaderButton
