import React from 'react'
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native'
import {Swipeable} from "react-native-gesture-handler"
import {MaterialCommunityIcons} from "@expo/vector-icons"

import AppText from './AppText'
import colors from '../config/colors'


const ListItem = ({title, subTitle, image, IconComponent, onPress, renderRightActions}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.white} onPress={onPress}>
            <View style={styles.personDetails}>
                {IconComponent}
                {image && <Image source={image} style={styles.image} />}
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                    {subTitle && <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>}
                </View>
                <MaterialCommunityIcons size={25} colo={colors.medium} name="chevron-right" />
            </View>
        </TouchableHighlight>
    </Swipeable>
  )
}

export default ListItem;

const styles = StyleSheet.create({
    detailsContainer:{
        flex:1,
        paddingHorizontal:10,
        justifyContent:"center",
    },
    image:{
        height:70, 
        width:70, 
        borderRadius:35,
    },
    personDetails:{
        alignItems:"center",
        flexDirection:"row",
        paddingLeft:5,
        width:"100%",
        backgroundColor:colors.white,
        paddingVertical:10
    },
    subTitle:{
        color:colors.medium
    },
    title:{
        fontWeight:"600"
    }
})