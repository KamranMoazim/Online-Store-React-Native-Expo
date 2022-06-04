import React, {useState, useContext} from 'react'
import { StyleSheet, Image } from 'react-native'
import * as Yup from "yup"
import jwtDecode from "jwt-decode";

import Screen from "./Screen";
import AppFormField from '../components/AppFormField';
import AppFormSubmitButton from '../components/AppFormSubmitButton';
import AppForm from '../components/AppForm';
import AppErrorMessage from '../components/AppErrorMessage';
import authApi from "../api/auth"

import AuthContext from '../Contexts/AuthContext';
import authStorage from "../utils/authStore"

const validationSchema = Yup.object().shape({
    email:Yup.string().required().email().label("Email"),
    password:Yup.string().required().min(4).label("Password"),
})

const LoginScreen = () => {

    const [loginFailed, setLoginFailed] = useState(false);
    const authContext = useContext(AuthContext)

    const handleSubmit = async ({email, password}) => {
        const response = await authApi.login(email, password);
        // console.log(email)
        // console.log(password)
        // console.log(response)
        if(!response.ok) return setLoginFailed(true);
        setLoginFailed(false)
        // console.log(response)
        const user = jwtDecode(response.data);
        // console.log(user)
        authContext.setUser(user);
        await authStorage.storeToken(response.data)
    }

  return (
    <Screen style={styles.container}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <AppForm
            initialValues={{email:"", password:""}}
            validationSchema={validationSchema}
            onSubmit = {(values, { resetForm }) => {
                handleSubmit(values);
                // console.log(values)
                resetForm();
            }}
        >
            <AppErrorMessage error="Invalid Email or/and Password!" visible={loginFailed} />
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