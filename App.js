import {useState} from "react"
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView, Image, 
  TouchableWithoutFeedback, TouchableHighlight, TouchableOpacity, 
  TouchableNativeFeedback, Alert, Platform, StatusBar
 } from 'react-native';

export default function App() {

  const handlePress = () => console.log("texted clicked")

  // console.log(require("./assets/icon.png"))

  console.log(Platform.OS)

  // *********** 1
  // <Text numberOfLines={2} onPress={handlePress}>
  // Hello React Native This is very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long text. 
  // </Text>

  // *********** 2
  // {/* <Image source={require("./assets/icon.png")} />  */}
  // {/* it can simply work without specifying height and width but for remote images with need them */}
  // {/* <Image source={{uri:"https:picsum.photos/200/300"}} style={{height:200, width:200}} />  */}

  // *********** 3
  // {/* <Image 
  //   fadeDuration={5000} 
  //   blurRadius={1} 
  //   source={{height:200, width:200, uri:"https:picsum.photos/200/300"}} 
  // /> */}

  // *********** 4
  // {/* <TouchableHighlight onPress={handlePress}>
  //   <Image 
  //     fadeDuration={5000} 
  //     blurRadius={1} 
  //     source={{height:200, width:200, uri:"https:picsum.photos/200/300"}} 
  //   /> 
  // </TouchableHighlight> */}


  // *********** 5
  // {/* <TouchableNativeFeedback onPress={handlePress}>
  //   <View style={{height:200, width:200, backgroundColor:"dodgerblue"}}></View>
  // </TouchableNativeFeedback> */}


  // *********** 6
  // {/* <Button color={"orange"} title="Press" onPress={handlePress} /> */}

  // *********** 7
  // {/* <Button color={"orange"} title="Press" onPress={()=>alert("hello")} /> */}


  // *********** 8
  // {/* <Button color={"orange"} title="Press" onPress={()=>Alert.alert("My Title", "My Message", [
  //   {text:"yes", onPress:handlePress, style:{}},
  //   {text:"no", onPress:handlePress}
  // ])} /> */}
  
  
  // *********** 9
  // {/* <Button color={"orange"} title="Press" onPress={()=>Alert.prompt("My Title", "My Message", (input)=>console.log(input))} /> */}
  // above do not work in Android
  

  return (
    <View style={[styles.container]}> 
      <View style={{backgroundColor:"dodgerblue", height:100, width:100}}>
        
      </View>
    </View>
  );
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
