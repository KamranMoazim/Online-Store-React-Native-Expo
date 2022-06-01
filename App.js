import {useState, useEffect} from "react"
import { StyleSheet, View, Platform, StatusBar, Dimensions, Text, TextInput, Switch, Picker, Image } from 'react-native';
import {useDimensions, useDeviceOrientation, } from "@react-native-community/hooks"
import {MaterialCommunityIcons} from "@expo/vector-icons"
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {NavigationContainer, useNavigation} from "@react-navigation/native"

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



// import NetInfo, {useNetInfo} from "@react-native-community/netinfo"
// import AsyncStorage from "@react-native-community/async-storage"



const App = gestureHandlerRootHOC(() => {


  // *********** 1
  // following are OFFLINE Strategies, the more you go down the more it gets complex
  // 1. Notify Users
  // 2. Disable Features
  // 3. Cache Data
  // 4. Store user actions

  // *********** 2
  // expo install @react-native-community/netinfo   ---> to get connection infromation
  // NetInfo.fetch().then((netInfo)=>console.log(netInfo))      // will called only once
  // NetInfo.addEventListener((netInfo)=>console.log(netInfo))  // will called again and again  // you also takecare of unsubscribing
  // const netInfo = useNetInfo()  // for functional components

  // *********** 3
  // persistence storage
  // 1. AsyncStorage
  // 2. SecureStore
  // 3. SQLite

  // *********** 4
  // AsyncStorage
  // npm install @react-native-async-storage/async-storage
  // const demo = async () => {
  //   try { // we are using try-catch becuase we DONT know whether there is space available in phone or not 
  //     await AsyncStorage.setItem("person", JSON.stringify({id:1}))
  //     const value = AsyncStorage.getItem("person");
  //     const person = JSON.parse(value)
  //     console.log(person)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // via debugger you can view AsyncStorage

  // *********** 5
  // Caching Data
  // to cache data we must first introduce a CACHING LAYER that do following
  // 1. serialize/deserialize (stringify/parse)
  // 2. apply timestamps
  // 3. remove expired items

  // *********** 6
  // created cache.js

  // *********** 7
  // updated client.js

  // *********** 8
  // npm i react-native-expo-image-cache expo-blur   --> for image caching
  // updated Card Component and ListingDetailsScreen

  // *********** 9
  // storing user actions when offline
  // better to avoid it and if you want it at any cost then
  // just google it and better to use firebase or realm.io

  // *********** 10
  // created AppOfflineNotice and used it in App.js


  // *********** 11
  // *********** 12
  // *********** 13
  // *********** 14
  // *********** 15

  
  return (
    <>
      <AppOfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {/* <AuthNavigator /> */}
        <AppNavigator />
      </NavigationContainer>
    </>
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
