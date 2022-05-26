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
  // TextInput
  // const [name, setName] = useState("");
  // <TextInput
  //   placeholder="First Name"
  //   maxLength={4}
  //   keyboardType="number-pad"
  //   clearButtonMode="never"  // only works in IOS
  //   secureTextEntry={true}
  //   onChangeText={(text)=>setName(text)}
  // />


  // *********** 2
  //  created AppTextInput
  // const AppTextInput = ({icon, ...otherProps}) => {
  //   return (
  //     <View style={styles.container}>
  //         {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.medium} style={styles.icon} />}
  //         <TextInput {...otherProps} />
  //     </View>
  //   )
  // }


  // *********** 3
  // created defaultStyles file and updated AppTextInput and AppText

  // *********** 4
  // const [isNew, setIsNEw] = useState(false);
  // <Switch value={isNew} onChange={(newValue)=>{setIsNEw(newValue)}} />
  

  // *********** 5
  // installed ---> @react-native-picker/picker or not
  // and created custom AppPicker
  // const AppPicker = ({icon, placeholder, ...otherProps}) => {
  //   const [showModal, setShowModal] = useState(false);
  //   return (
  //     <>
  //         <TouchableWithoutFeedback onPress={() => setShowModal(true)}>
  //             <View style={styles.container}>
  //                 {icon && <MaterialCommunityIcons 
  //                             name={icon} 
  //                             size={20} 
  //                             color={defaultStyles.colors.medium} 
  //                             style={styles.icon} />}
  //                 <AppText style={styles.text}>
  //                     {placeholder}
  //                 </AppText>
  //                 <MaterialCommunityIcons name="chevron-down" size={20} color={defaultStyles.colors.medium} />
  //             </View>
  //         </TouchableWithoutFeedback>
  //         <Modal visible={showModal}>
  //             <AppButton 
  //                 title="Close" 
  //                 style={{width:"25%", alignSelf:"center"}} 
  //                 onPress={() => setShowModal(false)} />
  //         </Modal>
  //     </>
  //   )
  // }


  // *********** 6
  // updating AppPicker by creating PickerItem
  // ............
  // const PickerItem = ({label, onPress}) => {
  //   return (
  //     <TouchableOpacity onPress={onPress}>
  //         <AppText style={styles.text}>{label}</AppText>
  //     </TouchableOpacity>
  //   )
  // }
  // ............
  // <Modal visible={showModal}>
  // <AppButton 
  //     title="Close" 
  //     style={{width:"25%", alignSelf:"center"}} 
  //     onPress={() => setShowModal(false)} 
  // />
  // <FlatList 
  // data={items}
  // keyExtractor={(item)=>item.value.toString() }
  // renderItem={({item}) => <PickerItem label={item.label} onPress={()=>console.log(item)} />} />
  // </Modal>



  // *********** 7
  // more updation
  // const categories = [
  //   {label:"Furniture", value:1},
  //   {label:"Clothing", value:2},
  //   {label:"Cameras", value:3},
  // ]
  // const [category, setCategory] = useState(categories[0]);
  // return (
  //   <Screen>
  //     <AppPicker 
  //     selectedItem={category} onSelectItem={(item) => setCategory(item)} 
  //     items={categories} 
  //     icon="apps" placeholder="Category" />
  //     <AppTextInput icon="email" placeholder="Email" />
  //   </Screen>
  // );

  // *********** 8
  // 
  
  
  // *********** 9
  // 
  

  // *********** 10
  // 
  

  // *********** 11
  // 
  

  const categories = [
    {label:"Furniture", value:1},
    {label:"Clothing", value:2},
    {label:"Cameras", value:3},
  ]

  const [category, setCategory] = useState(categories[0]);
  
  return (
    <Screen>
      <AppPicker 
      selectedItem={category} onSelectItem={(item) => setCategory(item)} 
      items={categories} 
      icon="apps" placeholder="Category" />
      <AppTextInput icon="email" placeholder="Email" />
    </Screen>
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
