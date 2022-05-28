import { useFormikContext } from 'formik'
import React from 'react'
import { StyleSheet } from 'react-native'

import AppPicker from './AppPicker'
import AppErrorMessage from './AppErrorMessage'

const AppFormPicker = ({items, name, numberOfColumns, width, placeholder, PickerItemComponent}) => {


    const {errors, setFieldValue, touched, values} = useFormikContext();

    // console.log(values)

  return (
    <>
        <AppPicker 
            items={items}
            onSelectItem={(item)=>setFieldValue(name, item)}
            placeholder={placeholder}
            selectedItem={values[name]}
            width={width}
            numberOfColumns={numberOfColumns}
            PickerItemComponent={PickerItemComponent}
        />
        <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}

export default AppFormPicker

const styles = StyleSheet.create({})