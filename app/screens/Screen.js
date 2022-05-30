import { StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import Constants from 'expo-constants'
import colors from '../config/colors'

const Screen = ({children, style}) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      {children}
    </SafeAreaView>
  )
}

export default Screen

const styles = StyleSheet.create({
    screen: {
        paddingTop:Constants.statusBarHeight,
        flex:1,
        // backgroundColor:colors.white
    },
    view:{
      flex:1
    }
})