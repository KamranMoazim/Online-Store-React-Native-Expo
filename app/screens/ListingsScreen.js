import React,{useEffect, useState} from 'react'
import { StyleSheet , FlatList, ActivityIndicator } from 'react-native'

import AppErrorMessage from '../components/AppErrorMessage'
import AppActivityIndicator from '../components/AppActivityIndicator'
import AppButton from '../components/AppButton'
import Card from '../components/Card'
import colors from '../config/colors'
import routes from '../navigation/routes'
import Screen from './Screen'

import listingsApi from '../api/listings'
import useApi from '../hooks/useApi'




const ListingsScreen = ({navigation}) => {

  const {data:listings, loading, error, request:loadListings} = useApi(listingsApi.getListings)

  // const loadListings = request;
  // console.log(listings)

  useEffect(() => {
    loadListings()
  }, [])
  

  return (
    <>
    <AppActivityIndicator visible={loading} />
    
    <Screen style={styles.container}>
      {error && <>
        <AppErrorMessage visible={error} error="Couldn't retrieve Listings!" />
        <AppButton onPress={loadListings} title="Retry" />
      </> }
      {/* <ActivityIndicator animating={loading} size="large" /> */}
      
      <FlatList 
        data={listings}
        renderItem={({item}) => (
        <Card 
            title={item.title} 
            subTitle={"$" + item.price} 
            imageUrl={item.images[0].url}
            thumbnailUrl={item.images[0].thumbnailUrl}
            onPress={()=>navigation.navigate(routes.LISTING_DETAILS, item)}
             />)}
        keyExtractor={(item)=>item.id.toString()}
      />
    </Screen>
    </>
  )
}

export default ListingsScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.light,
        padding:20,
        // paddingTop:80
    }
})