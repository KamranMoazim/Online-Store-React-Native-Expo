import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import colors from '../config/colors'

const ListItemSeparator = () => {
  return (
    <View style={styles.separator}></View>
  )
}

export default ListItemSeparator

const styles = StyleSheet.create({
    separator:{
        backgroundColor:colors.light,
        width:"100%",
        height:1
    }
})