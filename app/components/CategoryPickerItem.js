import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from './Icon'
import AppText from './AppText'

const CategoryPickerItem = ({item, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon name={item.icon} backgroundColor={item.backgroundColor} size={80} />
      <AppText style={styles.label}>{item.label}</AppText>
    </TouchableOpacity>
  )
}

export default CategoryPickerItem

const styles = StyleSheet.create({
  container:{
    paddingHorizontal:30,
    paddingVertical:15,
    alignItems:"center",
    width:"33%",
    alignSelf:"center",
  },
  label:{
    paddingTop:5,
    textAlign:"center",
  }
})