import React from 'react'
import { StyleSheet } from 'react-native'


import { Formik } from 'formik'

const AppForm = ({initialValues, validationSchema, onSubmit, children}) => {
  return (
    <Formik 
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
    >
        {()=>(
            <>
                {children}
            </>
        )}
    </Formik>
  )
}

export default AppForm

const styles = StyleSheet.create({})