import React from 'react'
import { StyleSheet, View, Modal } from 'react-native'
import * as Progress from "react-native-progress"
import LottieView from 'lottie-react-native'

import colors from '../config/colors'

const UpdloadScreen = ({onDone, progress, visible}) => {
  return (
    <Modal visible={visible}>
        <View style={styles.container}>
            {
                progress < 1 ? (<Progress.Bar color={colors.primary} width={200} progress={progress} />)
                : (<LottieView 
                    onAnimationFinish={onDone}
                    source={require("../assets/animations/done.json")} 
                    style={styles.animation} 
                    loop={false} 
                    autoPlay />)
            }
        </View>
    </Modal>
  )
}

export default UpdloadScreen

const styles = StyleSheet.create({
    animation:{
        width:150
    },
    container:{
        justifyContent:"center",
        alignItems:"center",
        flex:1
    }
})