import React from 'react'
import { StyleSheet, View } from 'react-native'
import Constants from 'expo-constants'
import {useNetInfo} from "@react-native-community/netinfo"

import colors from '../config/colors'
import AppText from './AppText'

const AppOfflineNotice = () => {

    const netInfo = useNetInfo();

    // console.log(netInfo)

    if (netInfo.type === "unknown" && netInfo.isInternetReachable === false) {
        
        return (
          <View style={styles.container}>
            <AppText style={styles.text}>
                  No Iternet Connection
            </AppText>
          </View>
        )
    }

    return null;
}

export default AppOfflineNotice

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
        position:"absolute",
        height:50,
        top:Constants.statusBarHeight,
        backgroundColor:colors.primary,
        zIndex:1
    },
    text:{
        color:colors.white
    }
})