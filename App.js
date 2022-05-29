import {useState, useEffect} from "react"
import { StyleSheet, View, Platform, StatusBar,
  Dimensions, Text, TextInput, Switch, Picker, Image
 } from 'react-native';
import {useDimensions, useDeviceOrientation, } from "@react-native-community/hooks"
import {MaterialCommunityIcons} from "@expo/vector-icons"
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";



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


const App = gestureHandlerRootHOC(() => {


  // *********** 1
  // way-1 we are going to use this one
  // expo install expo-image-picker
  // const requestPermission = async () => {
  //   const {granted} = await ImagePicker.getMediaLibraryPermissionsAsync();
  //   if(!granted) alert("You need to enable permission to access you Images!")
  // }
  // useEffect(() => {
  //   requestPermission();
  // }, [])


  // *********** 2
  // way-2
  // expo install expo-permissions
  // const requestPermission = async () => {
  //   const {granted} = await Permissions.askAsync(Permissions.CAMERA, Permissions.AUDIO_RECORDING);
  //   if(!granted) alert("You need to enable permission to access!")
  // }
  // useEffect(() => {
  //   requestPermission();
  // }, [])
  

  // *********** 3
  const [imageUri, setImageUri] = useState();
  // const selectImage = async () => {
  //   try {
  //     const result = await ImagePicker.launchImageLibraryAsync();
  //     if(!result.cancelled){
  //       setImageUri(result.uri);
  //     }
  //   } catch (error) {
  //     console.log("error ", error)
  //   }
  // }
  // <Screen>
  //     <AppButton title="Select Image" onPress={selectImage} />
  //     <Image source={{uri:imageUri}} style={{height:100, width:100}} />
  //   </Screen>
  
  // *********** 4
  // created AppImageInput
  // <Image source={{uri:imageUri, height:100, width:100}} />
  // <AppImageInput onChangeImage={selectImage} />
  
  
  // *********** 5
  // updated AppImageInput
//   const AppImageInput = ({onChangeImage, imageUri}) => {
//     handlePress = () => {
//         if(!imageUri){
//             selectImage()
//         } else {
//             Alert.alert("Delete", "Are you sure you wants to DELETE this Image ? ", [
//                 {text:"Yes", onPress:()=>onChangeImage(null)},
//                 {text:"No"},
//             ])
//         }
//     }
//     const selectImage = async () => {
//         try {
//             const result = await ImagePicker.launchImageLibraryAsync({
//                 mediaTypes:ImagePicker.MediaTypeOptions.Images,
//                 quality:0.5
//             });
//             if(!result.cancelled){
//                 onChangeImage(result.uri);
//             }
//         } catch (error) {
//             console.log("error ", error)
//         }
//     }
//   return (
//       <TouchableWithoutFeedback onPress={onPress}>
//         <View style={styles.container}>
//             <Image source={{uri:imageUri}} style={{height:100,width:100}} />
//             <MaterialCommunityIcons name='camera' size={40} />
//         </View>
//     </TouchableWithoutFeedback>
//   )
// }
  

  // *********** 6
  // created ImageInputList
  // const [imageUris, setImageUris] = useState([]);
  // created AppImageInputList
  // const handleRemove = (uri) => {
  //   setImageUris(imageUris.filter((imageUri)=>imageUri!==uri))
  // }
  // const handleAdd = (uri) => {
  //   setImageUris([...imageUris, uri]);
  // }
  // <AppImageInputList imageUris={imageUris} onRemoveImage={handleRemove} onAddImage={handleAdd} />
  

  // *********** 7
  // created AppFormImageInputList
  

  // *********** 8
  // updated ListingEditScreen by adding AppFormImageInputList
  
  
  // *********** 9
  // added Location in ListingEditScreen
  // const [location, setLocation] = useState();
  // const getLocation = async () => {
  //     const {granted} = await Location.requestForegroundPermissionsAsync();
  //     if(!granted) return;
  //     const {coords:{latitude, longitude}} = await Location.getLastKnownPositionAsync();
  //     setLocation({longitude, latitude});
  // }
  // useEffect(()=>{
  //     getLocation();
  // },[])
  // console.log(location)
  

  // *********** 10
  // created hook ---> useLocation and used in ListingEditScreen
  

  // *********** 11
  // 

  
  return (
    <ListingEditScreen />
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
