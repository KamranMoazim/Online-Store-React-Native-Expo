import React from 'react'
import { StyleSheet, Text, View, StatusBar, Platform, ImageBackground, Image } from 'react-native'


import colors from '../config/colors'


const WelcomeScreen = () => {
  return (
    <ImageBackground source={require("../assets/background.jpg")} style={styles.background}>
        <View style={styles.logoContainer}>
            <Image source={require("../assets/logo-red.png")} style={styles.logo} />
            <Text>Sell What you DON'T need!</Text>
        </View>
        <View style={styles.loginButton}>
        </View>
        <View style={styles.registerButton}>
        </View>
    </ImageBackground>
  )
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        paddingTop:Platform.OS === "android" ? StatusBar.currentHeight : 0,
        justifyContent:"flex-end",
        alignItems:"center"
    },
    loginButton: {
        height:70,
        width:"100%",
        backgroundColor: colors.primary
    },
    logoContainer: {
        position:"absolute",
        top:90,
        alignItems:"center",
    },
    logo: {
        height:100,
        width:100,
    },
    registerButton: {
        height:70,
        width:"100%",
        backgroundColor: colors.secondary
    },
})