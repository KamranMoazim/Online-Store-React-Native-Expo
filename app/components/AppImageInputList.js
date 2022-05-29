import React,{useRef} from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'

import AppImageInput from './AppImageInput'

const AppImageInputList = ({imageUris=[], onRemoveImage, onAddImage}) => {

    const scrollViewRef = useRef();

    return (
        <View>
            <ScrollView horizontal scr ref={scrollViewRef} onContentSizeChange={()=>scrollViewRef.current.scrollToEnd()}>
                <View style={styles.container}>
                {imageUris.map((imageUri)=>(
                    <View style={styles.image} key={imageUri}>
                        <AppImageInput imageUri={imageUri} onChangeImage={()=>onRemoveImage(imageUri)} />
                    </View>
                ))}
                <AppImageInput onChangeImage={(uri)=>onAddImage(uri)} />
                </View>
            </ScrollView>
        </View>
  )
}

export default AppImageInputList

const styles = StyleSheet.create({
    container:{
        flexDirection:"row"
    },
    image:{
        marginRight:10,
    }
})