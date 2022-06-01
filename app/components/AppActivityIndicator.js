import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LottieView from "lottie-react-native";


const AppActivityIndicator = ({visible=false}) => {

    if(!visible) return null;

  return <LottieView 
            loop 
            autoPlay
            source={require("../assets/animations/loader.json")}
            />
}

export default AppActivityIndicator

const styles = StyleSheet.create({})