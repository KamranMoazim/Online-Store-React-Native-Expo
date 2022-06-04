import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LottieView from "lottie-react-native";
import colors from '../config/colors';


const AppActivityIndicator = ({visible=false}) => {

    if(!visible) return null;

  return (
    <View style={styles.overlay}>
      <LottieView 
            loop 
            autoPlay
            source={require("../assets/animations/loader.json")}
            />
    </View>
  )
}

export default AppActivityIndicator

const styles = StyleSheet.create({
  overlay:{
    height:"100%",
    width:"100%",
    backgroundColor:colors.white,
    position:"absolute",
    zIndex:1,
    opacity:0.7
  }
})