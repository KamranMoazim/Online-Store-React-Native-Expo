import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

import Card from '../components/Card'
import ListItem from '../components/ListItem'
import ListItemSeparator from '../components/ListItemSeparator'
import colors from '../config/colors'
import routes from '../navigation/routes'
import Screen from './Screen'


const listings = [
  {
    id:1,
    title:"Red Jacket",
    price:"100",
    image:`${require("../assets/jacket.jpg")}`
  },
  {
    id:2,
    title:"Couchh in Great Condition",
    price:"900",
    image:`${require("../assets/couch.jpg")}`
}
]

const ItemsScreen = ({navigation}) => {

  return (
    <Screen style={styles.container}>
      <FlatList 
        data={listings}
        renderItem={({item}) => (
        <Card 
            title={item.title} 
            subTitle={"$" + item.price} 
            image={item.image}
            onPress={()=>navigation.navigate(routes.LISTING_DETAILS, item)}
             />)}
        keyExtractor={(item)=>item.id.toString()}
      />
    </Screen>
  )
}

export default ItemsScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.light,
        padding:20,
        // paddingTop:80
    }
})