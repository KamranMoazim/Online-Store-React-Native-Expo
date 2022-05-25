import React from 'react'
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native'
import {gestureHandlerRootHOC, Swipeable} from "react-native-gesture-handler"

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
                    <AppText style={styles.title}>{title}</AppText>
                    {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
                </View>
            </View>
        </TouchableHighlight>
    </Swipeable>
  )
}

export default ListItem;

const styles = StyleSheet.create({
    detailsContainer:{
        paddingHorizontal:15,
        justifyContent:"center",
    },
    image:{
        height:70, 
        width:70, 
        borderRadius:35,
    },
    personDetails:{
        flexDirection:"row",
        paddingLeft:15,
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