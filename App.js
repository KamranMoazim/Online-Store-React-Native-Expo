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
  // push notification Architecture
  // 1. Register app to get notification
  // 2. Store token on the server
  // 3. Send a notification
  // 4. Handle received notifications
  
  
  // *********** 2
  // npm i expo-notifications
  // added registerForPushNotifications in AppNavigator.js
  
  
  // *********** 3
  // created expoPushTokens.js in api folder and added register api and used it in AppNavigator.js 


  // *********** 4
  // sending notification via expo online (from expo testing)
  
  
  // *********** 5
  // sending notification via expo from server (adding functionality in server)
  

  // *********** 6
  // listening to Notification in real APP 
  // Notifications.addPushTokenListener(notification => console.log(notification))
  
  
  // *********** 7
  // created rootNavigation.js
  // we created ref beacuse we wants to access navigation in AppNavigator.js
  // and ew donot have the direct access throuhg props.navigation and we also cannot use useNavigation hook
  // so we created rootNavigation.js and linked navigationRef to below NavigationContainer
  // and now we can use navigation in AppNavigator.js
  
  
  
  // *********** 8
  // when you click on notification you often take USER to some screen
  // so added above created (navigate method) in AppNavigator.js ----> navigate(routes.ACCOUNT)
  
  
  // *********** 9
  // created hook useNotifications.js
  // moved all code from AppNavigator.js to here
  
  
  // *********** 10
  // using Local Notifications
  

  // *********** 11
  

  // *********** 12
  

  // *********** 13
  

  // *********** 14
  // *********** 15


  
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
