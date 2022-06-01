import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import AppText from './AppText'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

const Card = ({title, subTitle, imageUrl, onPress}) => {
    // console.log(imageUrl)
  return (
      <TouchableWithoutFeedback onPress={onPress}>

    <View style={styles.card}>
        {/* <Image style={[styles.image, {height:200, width:200}]} source={{uri:'http://192.168.0.14:9000/assets/jacket1_full.jpg'}} /> */}
        <Image style={styles.image} source={{uri:imageUrl}} />
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