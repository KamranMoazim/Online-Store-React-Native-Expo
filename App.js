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
  // const Tweets = ({navigation}) => (
  //   // this navigation prop is only available to components which are directly linked with Navigator. 
  //   // for more inner childs we need to useNavigation hook like we did in Link Component
  //   <Screen>
  //     <Text>
  //       Tweets
  //     </Text>
  //     <AppButton title="Tweet Details" onPress={()=>navigation.navigate("TweetDetails", {id:1})} />
  //   </Screen>
  // )
  // const TweetDetails = ({route}) => (
  //   // here as we are getting route from Tweet by onPress similarly through simply props
  //   // if we want it in more inner child we can use useRoute as we did in useNavigation
  //   <Screen>
  //     <Text>
  //       Tweet Details {route.params.id}
  //     </Text>
  //     <Link />
  //   </Screen>
  // )
  // const Link = () => {
  //   const {navigate} = useNavigation()
  //   return (<AppButton title="Tweets" onPress={()=>navigate("Tweets")} />)
  // }
  // const Stack = createNativeStackNavigator();
  // const StackNavigator = () => (
  //   <Stack.Navigator
  //   screenOptions={
  //     {
  //       headerStyle:{
  //         backgroundColor:"purple"
  //       },
  //       headerTintColor:"white",
  //     }
  //   }
  //    initialRouteName="Tweets">
  //     <Stack.Screen 
  //     name="Tweets" 
  //     component={Tweets}
  //     options={{ // or you can set these a lot of options in screenOptions
  //       headerStyle:{
  //         backgroundColor:"tomato"
  //       },
  //       headerTintColor:"white",
  //       headerShown:false
  //     }}
  //     />
  //     <Stack.Screen 
  //     // options={{title:"Hello work"}}  // way 1 
  //     // options={() => ({title:"Hello work2"})}  // way 2
  //     // options={({route}) => ({title:"hehe"+route.params.id})}  // way 3 --> to get access to route or navigation or Many other things
  //     name="TweetDetails" 
  //     component={TweetDetails} />
  //   </Stack.Navigator>
  // )
  // <NavigationContainer> 
  //   <StackNavigator />
  // </NavigationContainer> 


  // *********** 2
  // const Tweets = ({navigation}) => (
  //   <Screen>
  //     <Text>
  //       Tweets
  //     </Text>
  //     <AppButton title="Tweet Details" onPress={()=>navigation.navigate("TweetDetails", {id:1})} />
  //   </Screen>
  // )
  // const Account = () => <Screen><AppText>Account</AppText></Screen>
  // const Tab = createBottomTabNavigator()
  // const TabNavigator = () => (
  //   <Tab.Navigator
  //     screenOptions={{
  //       tabBarActiveBackgroundColor:"tomato",
  //       tabBarActiveTintColor:"white",
  //       tabBarInactiveBackgroundColor:"#ccc",
  //       tabBarInactiveTintColor:"grey"
  //     }}
  //   >
  //     <Tab.Screen 
  //     name="Feed" 
  //     // component={StackNavigator}
  //     component={Tweets}
  //     options={{
  //       tabBarIcon:({color, size})=><MaterialCommunityIcons size={size} name="home" color={color} />
  //     }}
  //     />
  //     <Tab.Screen 
  //     name="Account" 
  //     component={Account}
  //     options={{
  //       tabBarIcon:({color, size})=><MaterialCommunityIcons size={size} name="account" color={color} />
  //     }}
  //     />
  //   </Tab.Navigator>
  // )
  

  // *********** 3
  // created and completed AuthNavigator
  
  
  // *********** 4
  // applied navigationTheme
  
  
  // *********** 5
  // created and completed AppNavigator


  // *********** 6
  // created and completed FeedNavigator
  

  // *********** 7
  // created and used NewListingButton in AppNavigator
  

  // *********** 8
  // 
  
  
  // *********** 9
  // 
  
  

  // *********** 10
  // 
  

  // *********** 11
  // 

  
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
