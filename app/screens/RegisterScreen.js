import React from 'react'
import { StyleSheet } from 'react-native'
import * as Yup from "yup"

import Screen from "./Screen";
import AppFormField from '../components/AppFormField';
import AppFormSubmitButton from '../components/AppFormSubmitButton';
import AppForm from '../components/AppForm';


const validationSchema = Yup.object().shape({
    name:Yup.string().required().min(3).label("Name"),
    email:Yup.string().required().email().label("Email"),
    password:Yup.string().required().min(4).label("Password"),
})
const RegisterScreen = () => {
  return (
    <Screen style={styles.container}>
        <AppForm
            initialValues={{name:"", email:"", password:""}}
            validationSchema={validationSchema}
            onSubmit = {(values) => {
                console.log(values)
            }}
        >
            <AppFormField
                icon="account" 
                placeholder="Name"
                autoCapitalize="none"
                autoCorrect={false}
                name="name"
            />
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
            <AppFormSubmitButton title="Register" />
        </AppForm>
        
    </Screen>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  container:{
    padding:10
  },
})