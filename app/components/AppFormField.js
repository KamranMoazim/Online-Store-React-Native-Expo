import React from 'react'
import { StyleSheet } from 'react-native'
import { useFormikContext } from "formik";


import AppTextInput from './AppTextInput';
import AppErrorMessage from './AppErrorMessage';


const AppFormField = ({name, width, ...otherProps}) => {

    const {handleChange, setFieldTouched, touched, errors, values, setFieldValue} = useFormikContext();
    
  return (
    <>

    <AppTextInput
        {...otherProps}
        // onChangeText={handleChange(name)}
        onChangeText={(text)=>setFieldValue(name, text)}
        value={values[name]}
        onBlur={() => setFieldTouched(name)}
        width={width}
    />
    <AppErrorMessage visible={touched[name]} error={errors[name]} />

    </>
  )
}

export default AppFormField

const styles = StyleSheet.create({})