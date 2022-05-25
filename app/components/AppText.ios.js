import { StyleSheet, Text } from 'react-native'
import React from 'react'

const AppText = ({children}) => {
  return (
    <Text style={styles.text}>
        {children}
    </Text>
  )
}

export default AppText;

const styles = StyleSheet.create({
    text:{
        // way 3
        fontSize:20,
        fontFamily:"Avenir",
    },
})