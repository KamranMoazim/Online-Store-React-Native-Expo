import React from 'react'
import { StyleSheet } from 'react-native'
import { useFormikContext } from 'formik'


import AppErrorMessage from './AppErrorMessage'
import AppImageInputList from './AppImageInputList'


const AppFormImageInputList = ({name}) => {

    const {errors, setFieldValue, touched, values} = useFormikContext();
    const imageUris = values[name];

    
    const handleRemove = (uri) => {
        setFieldValue(name, imageUris.filter((imageUri)=>imageUri!==uri))
    }
    const handleAdd = (uri) => {
        setFieldValue(name, [...imageUris, uri]);
    }

  return (
    <>
        <AppImageInputList imageUris={imageUris} onRemoveImage={handleRemove} onAddImage={handleAdd} />
        <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}

export default AppFormImageInputList

const styles = StyleSheet.create({})