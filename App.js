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
import { navigationRef } from "./app/navigation/rootNavigation";
// import  from "./app/utils/authStore"


// import NetInfo, {useNetInfo} from "@react-native-community/netinfo"
// import AsyncStorage from "@react-native-community/async-storage"



const App = gestureHandlerRootHOC(() => {


  // *********** 1
  // add icon.png in assets
  // icon image should be 1024x1024
  
  
  // *********** 2
  // npm i -g sharp-cli
  // npx expo-optimize
  // above two are for optimizing assets
  
  // *********** 3
  // TWO thisngs
  // 1. install libraries and check if you can do same thing without the library or using other library 
  // with less importing cost.
  // 2. cost is also deprecated the way you import something from module.


  // *********** 4
  // use error reporting tools for PRODUCTION app
  // created logger.js

  
  // *********** 5
  // created settings.js for developemental settings

  // *********** 6
  // to PUBLISHH YOUR APP
  // expo publish --release-channel staging
  
  
  // *********** 7
  // expo build:ios
  
  
  
  // *********** 8
  // expo build:android
  // expo fetch:android:keystore
  // save them somewhere else (BE CAREFUL)
  
  
  // *********** 9
  // 
  
  
  // *********** 10
  // 


  
  const [isReady, setIsReady] = useState(false)
  const [user, setUser] = useState(null);
  const restoreUser = async () => {
    const user = await authStorage.getUser()
    if(user) return setUser(user);
  }

  
  
  if(!isReady){
    return <AppLoading onError={(error)=> console.warn(error)} startAsync={restoreUser} onFinish={()=>setIsReady(true)} />
  }

  return (
    <AuthContext.Provider value={{user, setUser}}>
      <AppOfflineNotice />
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        {user ? (<AppNavigator />) : (<AuthNavigator />) }
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
