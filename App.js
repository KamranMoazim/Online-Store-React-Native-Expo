import {useState} from "react"
import { StyleSheet, View, Platform, StatusBar,
  Dimensions
 } from 'react-native';
import {useDimensions, useDeviceOrientation} from "@react-native-community/hooks"


import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {

  const handlePress = () => console.log("texted clicked")

  // *********** 1
  // console.log(Dimensions.get("screen")) // it has a problem that is don't tell details when our phone is 
  // on rotated mode so we use @react-native-community/hooks ---> useDimension
  // console.log(useDimensions())
  // console.log(useDeviceOrientation())
  // <View style={{backgroundColor:"dodgerblue", width:'100%', height:landscape?"100%":"30%"}}></View>
  // const {landscape} = useDeviceOrientation();
  // you can change the orientation by going to app.json and then ---> orientation
  // or you can strictly follow portrait or landscape 


  // *********** 2
  // flex: 1 means it will take the whole avaliable space given by its parent
  // flex: 0.5 means it will take half of the whole avaliable space given by its parent
  //  <View style={{
  //   backgroundColor:"#fff",
  //   flex:0.5  // flex:1
  // }}>
  //   <View style={{
  //     backgroundColor:"dodgerblue",
  //     flex:2 //
  //   }} />
  //   <View style={{
  //     backgroundColor:"tomato",
  //     flex:1
  //   }} />
  //   <View style={{
  //     backgroundColor:"gold",
  //     flex:1
  //   }} /> 
  // </View>


  // *********** 3
  // flexDirection:"row" // it is for the main-axis representation and its opposite will be the secondary-axis
  // by-default it is column
  // <View style={{
  //   backgroundColor:"#fff",
  //   paddingTop:Platform.OS === "android" ? StatusBar.currentHeight : 0,
  //   flex:1,
  //   flexDirection:"row-reverse"
  // }}>
  //   <View style={{
  //     backgroundColor:"dodgerblue",
  //     height:100,
  //     width:100
  //   }} />
  //   <View style={{
  //     backgroundColor:"tomato",
  //     height:100,
  //     width:100
  //   }} />
  //   <View style={{
  //     backgroundColor:"gold",
  //     height:100,
  //     width:100
  //   }} /> 
  // </View>

  // *********** 4
  // justifyContent:"center" // for maovement along main-axis
  // alignItems:"center" // for maovement along secondary-axis
  // both of above are applied to parent container
  // alignSelf:"flex-start"
  // alignSelf is applied to each self
  // alignItems:"stretch" // you will see it in action when one of child do not have height or width 
  // depending on what is the main-axis and it is default behaviour
  // alignItems:"baseline" // you will see it in action when one of child have different height or width 
  // <View style={{
  //   backgroundColor:"#fff",
  //   paddingTop:Platform.OS === "android" ? StatusBar.currentHeight : 0,
  //   flex:1,
  //   flexDirection:"column",
  //   justifyContent:"center",
  //   alignItems:"center"
  // }}>
  //   <View style={{
  //     backgroundColor:"dodgerblue",
  //     height:100,
  //     width:100
  //   }} />
  //   <View style={{
  //     backgroundColor:"tomato",
  //     height:100,
  //     width:100
  //   }} />
  //   <View style={{
  //     backgroundColor:"gold",
  //     height:100,
  //     width:100
  //   }} /> 
  // </View>


  // *********** 5
  // flexWrap:"wrap" // by default it is no-wrap 
  // alignItems:"center" starts behaving differently when we use flexWrap. it will align the contents 
  // of each line along its line (you will see it when you have different height or width child) NOT along
  // the secondary axis (as it should) now if you wants to align contents along the secondary-axis, we have
  // to use alignContent:"center", 
  // now which we used to do with alignItems, have to do with alignContent because of flexWrap
  // <View style={{
  //   backgroundColor:"#fff",
  //   paddingTop:Platform.OS === "android" ? StatusBar.currentHeight : 0,
  //   flex:1,
  //   flexDirection:"row",
  //   justifyContent:"center",
  //   alignItems:"center",
  //   flexWrap:"wrap",
  //   alignContent:"center"
  // }}>
  //   <View style={{
  //     backgroundColor:"dodgerblue",
  //     height:100,
  //     width:100
  //   }} />
  //   <View style={{
  //     backgroundColor:"tomato",
  //     height:200,
  //     width:100
  //   }} />
  //   <View style={{
  //     backgroundColor:"gold",
  //     height:100,
  //     width:100
  //   }} />
  //   <View style={{
  //     backgroundColor:"grey",
  //     height:100,
  //     width:100
  //   }} />
  // </View>

  // *********** 6
  // flexBasis:100   // it is like setting height or width of each child when it is not given depending on
  // main-axis, like if main-axis is row then it will be applied to width, it is applied to child no parent
  // flexGrow:1  // it is also applied to child and will take whole available space 
  // flexShrink:1  // it is also applied to child and will take space so that other child do not wrap-out 
  // you will see them in action when you have white extra sapce (for flexGrow) and when your child is mkaing
  // other child go wrap-out (for flexShrink) 
  // flex:1 or flex:-1 have the same effect as the above two combine have
  // <View style={{
  //   backgroundColor:"#fff",
  //   paddingTop:Platform.OS === "android" ? StatusBar.currentHeight : 0,
  //   flex:1,
  //   flexDirection:"column",
  //   justifyContent:"center",
  //   alignItems:"center",
  // }}>
  //   <View style={{
  //     backgroundColor:"dodgerblue",
  //     height:900,
  //     width:100,
  //   }} />
  //   <View style={{
  //     backgroundColor:"tomato",
  //     height:100,
  //     width:100
  //   }} />
  //   <View style={{
  //     backgroundColor:"gold",
  //     height:100,
  //     width:100
  //   }} />
  // </View>


  // *********** 7
  // position:"relative" // it means this child is positioned according to its current position
  // above is default  
  // position:"absolute" // it means this child is positioned according to its parent position
  // <View style={{
  //   backgroundColor:"#fff",
  //   paddingTop:Platform.OS === "android" ? StatusBar.currentHeight : 0,
  //   flex:1,
  //   flexDirection:"row",
  //   justifyContent:"center",
  //   alignItems:"center",
  // }}>
  //   <View style={{
  //     backgroundColor:"dodgerblue",
  //     height:100,
  //     width:100,
  //   }} />
  //   <View style={{
  //     backgroundColor:"tomato",
  //     height:100,
  //     width:100,
  //     top:10,
  //     left:10,
  //     position:"absolute"
  //   }} />
  //   <View style={{
  //     backgroundColor:"gold",
  //     height:100,
  //     width:100
  //   }} />
  // </View>

  // *********** 8
  // WelcomeScreen completed
  
  
  // *********** 9
  // ViewImageScreen completed
  

  return (<WelcomeScreen />);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
