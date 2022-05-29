import React from 'react'
import { StyleSheet, View, TouchableWithoutFeedback, Alert, Image } from 'react-native'
import {MaterialCommunityIcons} from "@expo/vector-icons"
import * as ImagePicker from "expo-image-picker"


import colors from '../config/colors'


const AppImageInput = ({onChangeImage, imageUri}) => {

    handlePress = () => {
        if(!imageUri) selectImage()    
        else {
            Alert.alert("Delete", "Are you sure you wants to DELETE this Image ? ", [
                {text:"Yes", onPress:()=>onChangeImage(null)},
                {text:"No"},
            ])
        }
    }

    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes:ImagePicker.MediaTypeOptions.Images,
                quality:0.5
            });
            if(!result.cancelled){
                onChangeImage(result.uri);
            }
        } catch (error) {
            console.log("error ", error)
        }
    }

  return (
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.container}>
            {!imageUri && <MaterialCommunityIcons name='camera' size={40} />}
            {imageUri && <Image source={{uri:imageUri}} style={styles.image} />}
        </View>
    </TouchableWithoutFeedback>
  )
}

export default AppImageInput

const styles = StyleSheet.create({
    container:{
        height:100,
        width:100,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:colors.light,
        borderRadius:20,
        overflow:"hidden"
    },
    image:{
        height:"100%",
        width:"100%",

    }
})