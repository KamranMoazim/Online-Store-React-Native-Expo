import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

import colors from '../config/colors'
import AppText from '../components/AppText'
import ListItem from '../components/ListItem'

export default function ListingDetailsScreen({route}) {
    const {title, price, images} = route.params

    // console.log(title, price, images[0].url)

  return (
    <View>
        <Image style={styles.image} source={{uri:images[0].url}} />
        <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.price}>${price}</AppText>
            <View style={styles.userDetails}>
                <ListItem 
                    image={require("../assets/mosh.jpg")} 
                    title="Mosh Hamedani" 
                    subTitle="5 Listings" 
                />
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    detailsContainer:{
        padding:20,
    },
    image:{
        width:"100%",
        height:300,
    },
    price:{
        color:colors.secondary, 
        fontWeight:"bold",
        fontSize:20,
    },
    title:{
        fontSize:24,
        fontWeight:"600",
        marginBottom:10, 
    },
    userDetails:{
        marginVertical:30
    }
})