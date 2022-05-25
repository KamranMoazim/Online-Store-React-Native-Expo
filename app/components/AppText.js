import { StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'


// way 2
const separateTextStyles = Platform.select({
    ios:{
        fontSize:20,
        fontFamily:"Avenir",
    },
    android:{
        fontSize:18,
        fontFamily: "Roboto",
    }
})

const AppText = ({children, style}) => {
  return (
    <Text style={[styles.text, style]}>
        {children}
    </Text>
  )
}

export default AppText;

const styles = StyleSheet.create({
    text:{
        // way 1
        fontSize:Platform.OS === "android" ? 18 : 20,
        fontFamily:Platform.OS === "android" ? "Roboto" : "Avenir",

        // way 2
        // ...separateTextStyles
    },
})