import React from 'react'
import { StyleSheet, Text, View, Image, StatusBar, Platform, } from 'react-native'

import colors from '../config/colors'

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.closeIcon}></View>
        <View style={styles.deleteIcon}></View>
        <Image 
            style={styles.image} 
            source={require("../assets/chair.jpg")}
            resizeMode="contain"
        />
    </View>
  )
}

export default ViewImageScreen;

const styles = StyleSheet.create({
    closeIcon:{
        height:50,
        width:50,
        backgroundColor: colors.primary,
        position:"absolute",
        top:40,
        left:30,
    },
    container: {
        backgroundColor: colors.black,
        paddingTop:Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    deleteIcon:{
        height:50,
        width:50,
        backgroundColor: colors.secondary,
        position:"absolute",
        top:40,
        right:30,
    },
    image: {
        height:"100%",
        width:"100%",
    }
})