import {useState} from "react"
import { StyleSheet, View, Platform, StatusBar,
  Dimensions, Text
 } from 'react-native';
import {useDimensions, useDeviceOrientation} from "@react-native-community/hooks"
import {MaterialCommunityIcons} from "@expo/vector-icons"
import { gestureHandlerRootHOC } from "react-native-gesture-handler";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import ListingsScreen from "./app/screens/ListingsScreen"
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import AccountScreen from "./app/screens/AccountScreen";
import Screen from "./app/screens/Screen";

import AppText from "./app/components/AppText"
import AppButton from "./app/components/AppButton";
import MessagesScreen from "./app/screens/MessagesScreen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";


const App = gestureHandlerRootHOC(() => {


  // *********** 1
  // MessagesScreen created

  // *********** 2
  // Screen created


  // *********** 3
  // ListItemSeparator created


  // *********** 4
  // ListItem updated by making it Touchable
  // <TouchableHighlight underlayColor={colors.light} onPress={onPress}></TouchableHighlight>


  // *********** 5
  // search API reference at EXPO.com    IMPORTANT
  // ListItem updated and ListItemDeleteAction created
  // when ever you use react-native-gesture-handler
  // you have to wrap your that particular component (where it is used) or this app with --> gestureHandlerRootHOC
  

  // *********** 6
  // created handleDeleteMessage


  // *********** 7
  // added refreshing and onRefresh

  // *********** 8
  // Icon created
  
  
  // *********** 9
  // added Icon to ListItem
  

  // *********** 10
  // AccountScreen made
  

  // *********** 11
  // ListingsScreen updated
  

  
  return (
    <ListingsScreen />
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
