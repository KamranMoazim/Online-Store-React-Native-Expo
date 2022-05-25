import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import {MaterialCommunityIcons} from "@expo/vector-icons"
import colors from '../config/colors'

const Icon = ({name, size=50, backgroundColor="#fff", iconColor="#fff"}) => {
  return (
    <View style={[styles.container, {backgroundColor, height:size, width:size, borderRadius:size/2 }]}>
        <MaterialCommunityIcons name={name} size={size*0.5} color={iconColor} />
    </View>
  )
}

export default Icon

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent:"center", 
        backgroundColor:colors.white
    },
})