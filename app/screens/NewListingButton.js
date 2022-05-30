import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import {MaterialCommunityIcons} from "@expo/vector-icons"
import colors from '../config/colors'


const NewListingButton = ({onPress}) => {
  return (
      <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
      <MaterialCommunityIcons name='plus-circle' color={colors.white} size={35} />
    </View>
    </TouchableOpacity>
  )
}

export default NewListingButton

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        backgroundColor:colors.primary,
        borderRadius:40,
        borderColor:colors.white,
        borderWidth:10,
        bottom:25,
        height:80,
        justifyContent:"center",
        width:80,
    }
})