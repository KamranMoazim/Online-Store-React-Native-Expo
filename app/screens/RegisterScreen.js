import React, {useState} from 'react'
import { StyleSheet } from 'react-native'
import * as Yup from "yup"

import Screen from "./Screen";
import AppFormField from '../components/AppFormField';
import AppFormSubmitButton from '../components/AppFormSubmitButton';
import AppForm from '../components/AppForm';
import usersApi from "../api/users"
import authApi from "../api/auth"
import useAuth from '../hooks/useAuth';
import AppErrorMessage from '../components/AppErrorMessage';
import useApi from '../hooks/useApi';
import AppActivityIndicator from '../components/AppActivityIndicator';


const validationSchema = Yup.object().shape({
    name:Yup.string().required().min(3).label("Name"),
    email:Yup.string().required().email().label("Email"),
    password:Yup.string().required().min(4).label("Password"),
})
const RegisterScreen = () => {

  const {logIn} = useAuth();
  const [error, setError] = useState("");
  const resgisterApi = useApi(usersApi.register);
  const loginApi = useApi(authApi.login);

  const handleRegister = async (userInfo) => {
    const response = await resgisterApi.request(userInfo);
    if (!response.ok) {
      if (response.data) setError(response.data.error)
      else {
        setError("An unexpected error occured!");
        console.log(response)
      }
      return;
    }

    const { data: token} = await loginApi.request(userInfo.email, userInfo.password)

    await logIn(token)
  }

  return (
    <>
      <AppActivityIndicator visible={ resgisterApi.loading || loginApi.loading } />
    <Screen style={styles.container}>
      <AppErrorMessage error={error} visible={error?true:false} />
        <AppForm
            initialValues={{name:"", email:"", password:""}}
            validationSchema={validationSchema}
            onSubmit = {(values) => {
                // console.log(values)
                handleRegister(values);
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
    </>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  container:{
    padding:10
  },
})