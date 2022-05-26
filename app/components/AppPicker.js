import React, {useState} from 'react'
import { StyleSheet, View, TouchableWithoutFeedback, Modal, FlatList } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles"
import AppText from './AppText';
import AppButton from './AppButton';
import PickerItem from './PickerItem';



const AppPicker = ({icon, selectedItem, onSelectItem, placeholder, items}) => {

    const [showModal, setShowModal] = useState(false);

  return (
    <>
        <TouchableWithoutFeedback onPress={() => setShowModal(true)}>
            <View style={styles.container}>
                {icon && <MaterialCommunityIcons 
                            name={icon} 
                            size={20} 
                            color={defaultStyles.colors.medium} 
                            style={styles.icon} />}
                <AppText style={styles.text}>
                    {selectedItem ? selectedItem.label : placeholder}
                </AppText>
                <MaterialCommunityIcons name="chevron-down" size={20} color={defaultStyles.colors.medium} />
            </View>
        </TouchableWithoutFeedback>
        <Modal visible={showModal} animationType="fade">
            <AppButton 
                title="Close" 
                style={{width:"25%", alignSelf:"center"}} 
                onPress={() => setShowModal(false)} 
            />

            <FlatList 
            data={items}
            keyExtractor={(item)=>item.value.toString() }
            renderItem={({item}) => (
                <PickerItem 
                    label={item.label} 
                    onPress={()=>{
                        setShowModal(false)
                        onSelectItem(item)
                    }} />
            )} />
        </Modal>
    </>
  )
}

export default AppPicker

const styles = StyleSheet.create({
    container:{
        backgroundColor:defaultStyles.colors.light,
        borderRadius:25,
        flexDirection:"row",
        marginVertical:10,
        padding:15,
        width:"100%",
        alignItems:"center"
    },
    icon:{
        marginRight:10,
    },
    text:{
        color:defaultStyles.colors.medium,
        flex:1
    }
})