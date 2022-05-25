import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from '../components/Card'

const ItemsScreen = () => {
  return (
    <View style={styles.container}>
      <Card
        title="Red Jacket" 
        subTitle="$100"
        image={require("../assets/jacket.jpg")}
      />
    </View>
  )
}

export default ItemsScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#f8f4f4",
        padding:20,
        paddingTop:100
    }
})