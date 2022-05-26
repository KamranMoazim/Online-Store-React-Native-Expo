import {useState} from "react"
import { StyleSheet, View, Platform, StatusBar,
  Dimensions, Text, TextInput, Switch, Picker
 } from 'react-native';
import {useDimensions, useDeviceOrientation, } from "@react-native-community/hooks"
import {MaterialCommunityIcons} from "@expo/vector-icons"
import { gestureHandlerRootHOC } from "react-native-gesture-handler";


import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import ListingsScreen from "./app/screens/ListingsScreen"
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import AccountScreen from "./app/screens/AccountScreen";
import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import Screen from "./app/screens/Screen";

import AppText from "./app/components/AppText"
import AppButton from "./app/components/AppButton";
import MessagesScreen from "./app/screens/MessagesScreen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";


const App = gestureHandlerRootHOC(() => {


  // *********** 1
  // created Login Screen  ************ 
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")
  // return (
  // <Screen style={styles.container}>
  //     <Image style={styles.logo} source={require("../assets/logo.png")} />
  //     <AppTextInput 
  //         icon="email" 
  //         placeholder="Email"
  //         autoCapitalize="none"
  //         autoCorrect={false}
  //         keyboardType="email-address"
  //         onChangeText={(text)=>{setEmail(text)}}
  //     />
  //     <AppTextInput 
  //         icon="lock"
  //         placeholder="Password"
  //         autoCapitalize="none"
  //         autoCorrect={false}
  //         secureTextEntry={true}
  //         onChangeText={(text)=>{setPassword(text)}}
  //     />
  //     <AppButton title="Login" onPress={()=>console.log(email, password)} />
  // </Screen>
  // )

  // *********** 2
  // updated Login Screen with Formik
  //   <Screen style={styles.container}>
  //   <Image style={styles.logo} source={require("../assets/logo.png")} />
  //   <Formik 
  //       initialValues={{email:"", password:""}}
  //       onSubmit = {(values) => {
  //           console.log(values)
  //       }}
  //   >
  //       { ({handleChange, handleSubmit}) => (
  //           <>
  //               <AppTextInput 
  //                   icon="email" 
  //                   placeholder="Email"
  //                   autoCapitalize="none"
  //                   autoCorrect={false}
  //                   keyboardType="email-address"
  //                   onChangeText={handleChange("email")}
  //               />
  //               <AppTextInput 
  //                   icon="lock"
  //                   placeholder="Password"
  //                   autoCapitalize="none"
  //                   autoCorrect={false}
  //                   secureTextEntry={true}
  //                   onChangeText={handleChange("password")}
  //               />
  //               <AppButton title="Login" onPress={handleSubmit} />
  //           </>
  //       ) }
  //   </Formik>
  // </Screen> 


  // *********** 3
  // added validation with Yup to LoginScreen
  // const validationSchema = Yup.object().shape({
  //     email:Yup.string().required().email().label("Email"),
  //     password:Yup.string().required().min(4).label("Password"),
  // })
  
  // *********** 4
  // created AppErrorMessage and added to LoginScreen
  
  
  // *********** 5
  // updated AppErrorMessage and added touched to it
  


  // *********** 6
  // created AppFormField and used in LoginScreen Form
  

  // *********** 7
  // created AppFormSubmitButton
  

  // *********** 8
  // created AppForm and used in LoginScreen Form
  
  
  // *********** 9
  // created AppFormPicker
  

  // *********** 10
  // ListingEditScreen made
  

  // *********** 11
  // 
  
  return (
    <ListingEditScreen />
  );
})

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
