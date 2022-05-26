import React from 'react'
import { StyleSheet } from 'react-native'
import * as Yup from "yup"

import Screen from "./Screen";
import AppFormField from '../components/AppFormField';
import AppFormSubmitButton from '../components/AppFormSubmitButton';
import AppForm from '../components/AppForm';
import AppFormPicker from '../components/AppFormPicker';


const validationSchema = Yup.object().shape({
    title:Yup.string().required().min(1).label("Title"),
    price:Yup.number().required().min(1).max(10000).label("Price"),
    description:Yup.string().label("Description"),
    category:Yup.object().required().nullable().label("Category"),
})


const categories = [
    {label:"Furniture", value:1},
    {label:"Clothing", value:2},
    {label:"Camera", value:3},
]


const ListingEditScreen = () => {
  return (
    <Screen style={styles.container}>
        <AppForm 
            initialValues={{
                title:"",
                price:"",
                description:"",
                category:null
            }}
            validationSchema={validationSchema}
            onSubmit={(values)=>{
                console.log(values)
            }}
        >

            <AppFormField 
                maxLength={255}
                name="title"
                placeholder="Title"
             />
            <AppFormField 
                keyboardType="numeric"
                maxLength={8}
                name="title"
                placeholder="Price"
             />
            <AppFormPicker 
                items={categories}
                name="category"
                placeholder="Category"
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