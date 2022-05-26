import React from 'react'
import { StyleSheet } from 'react-native'
import { useFormikContext } from 'formik'

import AppButton from './AppButton'

const AppFormSubmitButton = ({title}) => {

    const {handleSubmit, values} = useFormikContext()

    // console.log(handleSubmit)
    // console.log(values)

  return (
    <AppButton title={title} onPress={handleSubmit} />
  )
}

export default AppFormSubmitButton

const styles = StyleSheet.create({})