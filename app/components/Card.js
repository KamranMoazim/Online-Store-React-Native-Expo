import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import AppText from './AppText'

const Card = ({title, subTitle, image}) => {
  return (
    <View style={styles.card}>
        <Image style={styles.image} source={image} />
        <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    card:{
        backgroundColor:colors.white,
        overflow:"hidden",
        borderRadius:15,
        marinBottom:20,
    },
    detailsContainer:{
        padding:20,
    },
    image:{
        width:"100%",
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