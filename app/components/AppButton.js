import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import colors from '../config/colors'

const AppButton = ({title, onPress, style}) => {
  return (
      <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
  )
}

export default AppButton

const styles = StyleSheet.create({
    button:{
        backgroundColor:colors.primary,
        width:"100%",
        borderRadius:25,
        justifyContent:"center",
        alignItems:"center",
        padding:15,
        marginVertical:10
    },
    text:{
        color:colors.white,
        fontSize:18,
        fontWeight:"bold",
        textTransform:"uppercase"
    }
})