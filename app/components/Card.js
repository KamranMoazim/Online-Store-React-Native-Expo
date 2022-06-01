import React from 'react'
import { StyleSheet, View } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import {Image} from "react-native-expo-image-cache"

import colors from '../config/colors'
import AppText from './AppText'


const Card = ({title, subTitle, imageUrl, onPress, thumbnailUrl}) => {
    // console.log(imageUrl)
  return (
      <TouchableWithoutFeedback onPress={onPress}>

    <View style={styles.card}>
        <Image 
            uri={imageUrl}
            tint="light"
            preview={{uri:thumbnailUrl}}
            style={styles.image} 
             />
        <View style={styles.detailsContainer}>
            <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
            <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>
        </View>
    </View>

    </TouchableWithoutFeedback>
  )
}

export default Card

const styles = StyleSheet.create({
    card:{
        backgroundColor:colors.white,
        overflow:"hidden",
        borderRadius:15,
        // marinBottom:20,
        marginVertical:10
    },
    detailsContainer:{
        padding:20,
    },
    image:{
        width:"100%",
        // width:100,
        height:200,
    },
    title:{
        marginBottom:7
    },
    subTitle:{
        color:colors.secondary, 
        fontWeight:"bold"
    }  
})