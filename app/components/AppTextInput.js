import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native'

import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/styles"


const AppTextInput = ({icon, width="100%", ...otherProps}) => {
  return (
    <View style={[styles.container, {width}]}>
        {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium} style={styles.icon} />}
        <TextInput style={[defaultStyles.text, styles.textInput]} {...otherProps} />
    </View>
  )
}

export default AppTextInput

const styles = StyleSheet.create({
    container:{
        backgroundColor:defaultStyles.colors.light,
        borderRadius:25,
        flexDirection:"row",
        marginVertical:10,
        padding:15,
        alignItems:"center"
    },
    icon:{
        marginRight:10,
    },
    textInput:{
        color:defaultStyles.colors.dark,
    }
})