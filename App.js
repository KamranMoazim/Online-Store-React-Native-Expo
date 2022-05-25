import {useState} from "react"
import { StyleSheet, View, Platform, StatusBar,
  Dimensions, Text
 } from 'react-native';
import {useDimensions, useDeviceOrientation} from "@react-native-community/hooks"
import {MaterialCommunityIcons} from "@expo/vector-icons"

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import ListingsScreen from "./app/screens/ListingsScreen"
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";

import AppText from "./app/components/AppText"
import AppButton from "./app/components/AppButton";


export default function App() {

  const handlePress = () => console.log("texted clicked")

  // *********** 1
  // about border, you can set styles collectively and individual sides
  // <View style={styles.container}>
  //   <View style={{
  //     backgroundColor:"dodgerblue",
  //     height:100,
  //     width:100,
  //     borderWidth:10,
  //     borderColor:"royalblue",
  //     borderRadius:10,
  //     // borderTopWidth:20,
  //     // borderTopColor:"purple",
  //     // borderTopLeftRadius:30,
  //   }}>
  //   </View>
  // </View>

  // *********** 2
  // shadow styling
  // --- IOS shadow styles ---
  // shadowColor:"grey",
  // shadowOffset:{height:10, width:-10},
  // shadowOpacity:0.5,
  // shadowRadius:10,
  // --- Android shadow styles ---
  // elevation:50 // only this single property for android shadow


  // *********** 3
  // padding (which is inside and applied to parent container) and margin (which is outside and applied to self container)
  // <View style={styles.container}>
  //   <View style={{
  //     backgroundColor:"dodgerblue",
  //     height:100,
  //     width:100,
  //     padding:20,
  //     paddingHorizontal:10, // above will be override by this (only horizontally)  
  //     paddingVertical:20,  // above will be override by this (only vertically)
  //     paddingLeft:30,  // above will be override by this (only from left side)    ===> and same for margin
  //   }}>
  //     <View style={{
  //       backgroundColor:"gold", 
  //       height:50, 
  //       width:50
  //     }}>
  //     </View>
  //   </View>
  //   <View style={{
  //     backgroundColor:"tomato",
  //     height:100,
  //     width:100,
  //     margin:20,
  //     marginVertical:30,
  //   }}></View>
  // </View>

  // *********** 4
  // text styling and you can also go to "custom fonts" to Expo.com for custom fonts
  // <Text style={{
  //   fontFamily:"",
  //   fontSize:30,
  //   fontStyle:"italic",
  //   fontWeight:"600",
  //   color:"dodgerblue",
  //   textTransform:"capitalize",
  //   textDecorationStyle:"dotted",
  //   textAlign:"justify",
  //   lineHeight:100
  // }}>
  //   I Love Pakistan!
  // </Text>


  // *********** 5
  // made AppText
  // made AppButton

  // *********** 6
  // Icons , go to Expo Icons
  // <MaterialCommunityIcons name="phone" color="dodgerblue" size={100} />


  // *********** 7
  // diiferent ways for multi-platform code writing
  // way 1 - simply write code in StyleSheet
  // way 2 - write code in like --> const textSeparateStyles = Platform.select({ios:{}, android:{}}) and 
  // then spread textSeparateStyles in ---> text:{...textSeparateStyles} in StyleSheet and then simply use text class
  // way 3 - definig diffrent files for each ios and android

  // *********** 8
  // WelcomeScreen updated
  
  
  // *********** 9
  // ListingsScreen made
  // Card made
  // <ListingsScreen />
  

  // *********** 10
  // ListingDetailsScreen made
  // ListItem made
  // <ListingDetailsScreen title="Red Jacket for sale" price="$100" image={require("./app/assets/jacket.jpg")} />


  // *********** 11
  // ViewImageScreen updated
  


  return (
    <View></View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop:Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
