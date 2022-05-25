import React from 'react'
import { StyleSheet, Text, View, StatusBar, Platform, ImageBackground, Image } from 'react-native'


import AppButton from '../components/AppButton'
import colors from '../config/colors'


const WelcomeScreen = () => {
  return (
    <ImageBackground blurRadius={5} source={require("../assets/background.jpg")} style={styles.background}>
        <View style={styles.logoContainer}>
            <Image source={require("../assets/logo-red.png")} style={styles.logo} />
            <Text>Sell What you DON'T need!</Text>
        </View>
        <View style={styles.buttonContainer}>
            <AppButton title="Login" onPress={()=>console.log("login")} />
            <AppButton title="Register" onPress={()=>console.log("register")} style={{backgroundColor: colors.secondary, marginTop:5}} />
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
    buttonContainer: {
        width:"100%",
        padding:10,
    } ,
    logoContainer: {
        position:"absolute",
        top:90,
        alignItems:"center",
    },
    logo: {
        height:100,
        width:100,
    },
})