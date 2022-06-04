import React, {useState} from "react"
import { StyleSheet, View, Platform, StatusBar, Dimensions, Text, TextInput, Switch, Picker, Image } from 'react-native';
import {useDimensions, useDeviceOrientation, } from "@react-native-community/hooks"
import {MaterialCommunityIcons} from "@expo/vector-icons"
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {NavigationContainer, useNavigation} from "@react-navigation/native"
// import {AppLoading} from "expo"
import AppLoading from 'expo-app-loading';


// @react-navigation/native-stack
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import ListingsScreen from "./app/screens/ListingsScreen"
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import AccountScreen from "./app/screens/AccountScreen";
import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import AppOfflineNotice from "./app/components/AppOfflineNotice";
import Screen from "./app/screens/Screen";

import AppText from "./app/components/AppText"
import AppButton from "./app/components/AppButton";
import MessagesScreen from "./app/screens/MessagesScreen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import AppImageInput from "./app/components/AppImageInput";
import AppImageInputList from "./app/components/AppImageInputList";

import AuthNavigator from "./app/navigation/AuthNavigator";
import AppNavigator from "./app/navigation/AppNavigator";
import navigationTheme from "./app/navigation/navigationTheme";

import AuthContext from "./app/Contexts/AuthContext";
import authStorage from "./app/utils/authStore"
// import  from "./app/utils/authStore"


// import NetInfo, {useNetInfo} from "@react-native-community/netinfo"
// import AsyncStorage from "@react-native-community/async-storage"



const App = gestureHandlerRootHOC(() => {


  // *********** 1
  // created auth.js and login function
  
  // *********** 2
  // added login functionality in LoginScreen
  
  // *********** 3
  // npm i jwt-decode, create state using useState in App.js and create AuthContext.js
  const [user, setUser] = useState(null);
  const restoreUser = async () => {
    const user = await authStorage.getUser()
    if(user) return setUser(user);
  }


  // *********** 4
  // updating AccountScreen (name and email)
  
  // *********** 5
  // added logout in AccountScreen

  // *********** 6
  // expo install expo-secure-store and created authStore.js
  // and updated login , logout functionality
  // useEffect(()=>{
  //   restoreToken()
  // },[])
  
  // *********** 7
  // added AppLoading from expo in App.js and there will be no need for useEffect after this
  const [isReady, setIsReady] = useState(false)
  // 
  
  // *********** 8
  // updated app.json ---> splash ---> resizeMode ---> cover and backgroundColor ---> #e63c4b
  
  // *********** 9
  // created hook useAuth
  
  // *********** 10
  // added code for apiClient.addAsyncRequestTransform in client.js for protected API callings

  // *********** 11
  // added register endpoint in users.js and in RegisterScreen

  // *********** 12
  // added useApi in RegisterScreen and AppAcivityIndicator

  // *********** 13
  // updated AppAcivityIndicator to add overlay

  // *********** 14
  // *********** 15

  
  if(!isReady){
    return <AppLoading onError={(error)=> console.warn(error)} startAsync={restoreUser} onFinish={()=>setIsReady(true)} />
  }

  return (
    <AuthContext.Provider value={{user, setUser}}>
      <AppOfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {user ? (<AppNavigator />) : (<AuthNavigator />) }
        {/* <AppNavigator /> */}
      </NavigationContainer>
    </AuthContext.Provider>
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
