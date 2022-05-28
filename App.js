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
  // updated ListItem by adding chevron-right
  

  // *********** 2
  // updated ListItem and Card by adding numberOfLines


  // *********** 3
  // updated ListingEditScreen by updating AppFormField --> AppTextInput & AppFormPicker --> AppPicker  
  
  
  // *********** 4
  // updated AppPicker for categories and added flexibility to change AppPicker by giving 
  // PickerItemComponent in ListingEditScreen of your own 
  
  
  // *********** 5
  // created CategoryPickerItem and added numberOfColumns capability  AppFormPicker --> AppPicker


  // *********** 6
  // 
  

  // *********** 7
  // 
  

  // *********** 8
  // 
  
  
  // *********** 9
  // 
  

  // *********** 10
  // 
  

  // *********** 11
  // 

  
  return (
    <></>
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
