import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

import AppText from './AppText'
import colors from '../config/colors'


export default function ListItem({title, subTitle, image}) {
  return (
    <View style={styles.personDetails}>
        <Image source={image} style={styles.image} />
        <View style={{paddingHorizontal:15}}>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    image:{
        height:70, 
        width:70, 
        borderRadius:35,
    },
    personDetails:{
        flexDirection:"row",
        marginVertical:15,
    },
    subTitle:{
        color:colors.medium
    },
    title:{
        fontWeight:"500"
    }
})