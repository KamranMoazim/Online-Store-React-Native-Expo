import React, {useState} from 'react'
import { StyleSheet } from 'react-native'
import * as Yup from "yup"


import Screen from "./Screen";
import AppFormField from '../components/AppFormField';
import AppFormSubmitButton from '../components/AppFormSubmitButton';
import AppForm from '../components/AppForm';
import AppFormPicker from '../components/AppFormPicker';
import CategoryPickerItem from '../components/CategoryPickerItem';
import AppFormImageInputList from '../components/AppFormImageInputList';
import UpdloadScreen from './UpdloadScreen';

import listingsApi from "../api/listings"
import useLocation from '../hooks/useLocation';


const validationSchema = Yup.object().shape({
    title:Yup.string().required().min(1).label("Title"),
    price:Yup.number().required().min(1).max(10000).label("Price"),
    description:Yup.string().label("Description"),
    category:Yup.object().required().nullable().label("Category"),
    images:Yup.array().min(1, "Please select at least one image.")
})


const categories = [
    {backgroundColor: "#fc5c65",icon: "floor-lamp", label: "Furniture", value: 1,},
    {backgroundColor: "#fd9644",icon: "car",label: "Cars",value: 2,},
    {backgroundColor: "#fed330",icon: "camera",label: "Cameras",value: 3,},
    {backgroundColor: "#26de81",icon: "cards",label: "Games",value: 4,},
    {backgroundColor: "#2bcbba",icon: "shoe-heel",label: "Clothing",value: 5,},
    {backgroundColor: "#45aaf2",icon: "basketball",label: "Sports",value: 6,},
    {backgroundColor: "#4b7bec",icon: "headphones",label: "Movies & Music",value: 7,},
    {backgroundColor: "#a55eea",icon: "book-open-variant",label: "Books",value: 8,},
    {backgroundColor: "#778ca3",icon: "application",label: "Other",value: 9,},
];
  
  


const ListingEditScreen = () => {

    const [uploadVisible, setUploadVisible] = useState(false)
    const [progress, setProgress] = useState(0)
    
    const {location} = useLocation();
    // console.log(location)

    const handleSubmit = async (listing, {resetForm}) => {
        setProgress(0)
        setUploadVisible(true);
        const result = await listingsApi.addListing(
            {...listing, location},
            (progress) => {
                setProgress(progress)
            }
        )
        
        if(!result.ok) {
            setUploadVisible(false);
            return alert("Could NOT save the Listing!")
        }

        resetForm();
    }



  return (
    <Screen style={styles.container}>
        <UpdloadScreen onDone={()=>setUploadVisible(false)} progress={progress} visible={uploadVisible} />
        <AppForm 
            initialValues={{
                title:"",
                price:"",
                description:"",
                category:null,
                images:[]
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <AppFormImageInputList name="images" />
            <AppFormField 
                maxLength={255}
                name="title"
                placeholder="Title"
             />
            <AppFormField 
                keyboardType="numeric"
                maxLength={8}
                name="price"
                placeholder="Price"
                width={120}
             />
            <AppFormPicker
                items={categories}
                name="category"
                placeholder="Category"
                numberOfColumns={3}
                width="50%"
                PickerItemComponent={CategoryPickerItem}
             />
            <AppFormField 
                maxLength={255}
                multiline
                name="description"
                numberOfLines={3}
                placeholder="Description"
            />
            <AppFormSubmitButton title="Post" />
        </AppForm>
    </Screen>
  )
}

export default ListingEditScreen

const styles = StyleSheet.create({
    container:{
        padding:10
    },
})