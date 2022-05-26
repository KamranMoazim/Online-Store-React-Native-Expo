import React from 'react'
import { StyleSheet } from 'react-native'
import { useFormikContext } from "formik";


import AppTextInput from './AppTextInput';
import AppErrorMessage from './AppErrorMessage';


const AppFormField = ({name, ...otherProps}) => {

    const {handleChange, setFieldTouched, touched, errors} = useFormikContext();
    
  return (
    <>

    <AppTextInput
        {...otherProps}
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
    />
    <AppErrorMessage visible={touched[name]} error={errors[name]} />

    </>
  )
}

export default AppFormField

const styles = StyleSheet.create({})