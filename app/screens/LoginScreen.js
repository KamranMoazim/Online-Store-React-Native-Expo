import React from 'react'
import { StyleSheet, Image } from 'react-native'
import * as Yup from "yup"

import Screen from "./Screen";
import AppFormField from '../components/AppFormField';
import AppFormSubmitButton from '../components/AppFormSubmitButton';
import AppForm from '../components/AppForm';


const validationSchema = Yup.object().shape({
    email:Yup.string().required().email().label("Email"),
    password:Yup.string().required().min(4).label("Password"),
})

const LoginScreen = () => {

  return (
    <Screen style={styles.container}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <AppForm
            initialValues={{email:"", password:""}}
            validationSchema={validationSchema}
            onSubmit = {(values, { resetForm }) => {
                console.log(values)
                // resetForm();
            }}
        >
            <AppFormField
                icon="email" 
                placeholder="Email"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                name="email"
            />
            <AppFormField
                icon="lock"
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                name="password"
            />
            <AppFormSubmitButton title="Login" />
        </AppForm>
        
    </Screen>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        padding:10
    },
    logo:{
        height:80,
        width:80,
        alignSelf:"center",
        marginTop:50,
        marginBottom:20,
    },
})