import React from 'react'
import { StyleSheet, View } from 'react-native'
import {Image} from "react-native-expo-image-cache"

import colors from '../config/colors'
import AppText from '../components/AppText'
import ListItem from '../components/ListItem'

export default function ListingDetailsScreen({route}) {
    
    const listing = route.params

    // console.log(listing)

  return (
    <View>
        <Image 
            style={styles.image} 
            preview={{uri:listing.images[0].thumbnailUrl}}
            tint="light"
            uri={listing.images[0].url}
         />
        <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{listing.title}</AppText>
            <AppText style={styles.price}>${listing.price}</AppText>
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