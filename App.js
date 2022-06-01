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
import AppImageInput from "./app/components/AppImageInput";
import AppImageInputList from "./app/components/AppImageInputList";

import AuthNavigator from "./app/navigation/AuthNavigator";
import AppNavigator from "./app/navigation/AppNavigator";
import navigationTheme from "./app/navigation/navigationTheme";




const App = gestureHandlerRootHOC(() => {


  // *********** 1
  // installed apisauce and created client.js
  

  // *********** 2
  // created listings.js
  
  

  // *********** 3
  // get listings from Backend in ListingsScreen

  
  // *********** 4
  // react native debugger toolbar install and then add your localport number and then add connect 
  // your app to it via remote debugger toolbar
  
  
  // *********** 5
  // added ErrorHandling in ListingsScreen
  

  // *********** 6
  // stimulating slow Connection
  

  // *********** 7
  // showing ActivityIndicator ---> i.e loading 
  

  // *********** 8
  // building custom ActivityIndicator using lottiefiles.com
  // be careful while using lottie-react-native(it supports only lotties of v2) 
  // expo install lottie-react-native
  // 
  
  
  // *********** 9
  // created and added AppActivityIndicator in ListingsScreen
  
  

  // *********** 10
  //   const [listings, setListings] = useState([]);
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false);
  // const loadListings = async () => {
  //   setLoading(true);
  //   const response = await listingsApi.getListings();
  //   setLoading(false);
  //   if(!response.ok) return setError(true)
  //   setError(false);
  //   setListings(response.data);
  // }
  // !!!!!! created useApi hook
  

  // *********** 11
  // created addListing in listings.js
  
  
  // *********** 12
  // updated addListing by adding onUploadProgressFunc


  // *********** 13
  // building UploadScreen


  // *********** 14
  // added progress bar to UploadScreen and installed react-native-progress


  // *********** 15
  // added Done animation in UploadScreen
  
  // *********** 16
  // updated AppFormField
  
  return (
    <NavigationContainer theme={navigationTheme}>
      {/* <AuthNavigator /> */}
      <AppNavigator />
    </NavigationContainer>
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
