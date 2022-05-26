import React from 'react'
import { StyleSheet } from 'react-native'

import Screen from "./Screen";
import AppTextInput from '../components/AppTextInput'
import AppButton from '../components/AppButton'

const RegisterScreen = () => {
  return (
    <Screen>
        <AppTextInput icon="account" placeholder="Name" />
        <AppTextInput icon="email" placeholder="Email" />
        <AppTextInput icon="lock" placeholder="Password" />
        <AppButton title="Register" onPress={()=>console.log("Register")} />
    </Screen>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({})