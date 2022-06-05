import React,{useEffect} from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {MaterialCommunityIcons} from "@expo/vector-icons"
import * as Notifications from "expo-notifications"
import * as permissions from "expo-permissions"

import AccountScreen from "../screens/AccountScreen";
import ListingEditScreen from "../screens/ListingEditScreen";
import FeedNavigator from "./FeedNavigator";
import NewListingButton from "../screens/NewListingButton";
import expoPushTokensApi from "../api/expoPushTokens"
import routes from "./routes";
import { navigate } from './rootNavigation';
import useNotifications from '../hooks/useNotifications';


const Tab = createBottomTabNavigator()

const AppNavigator = () => {

    useNotifications((notification)=>navigate(routes.ACCOUNT));

    // const registerForPushNotifications = async () => {
    //     const response = await permissions.askAsync(permissions.NOTIFICATIONS);
    //     if(!response.granted) return;
    //     const token = Notifications.getExpoPushTokenAsync();
    //     // console.log(token)
    //     expoPushTokensApi.register(token);
    // }
    // useEffect(()=>{
    //     registerForPushNotifications();
    //     Notifications.addPushTokenListener()
    // },[])

    const showNotification = async () => {
        await Notifications.scheduleNotificationAsync({
            content:{
                title:"Congratulations",
                body:"hello world!"
            },
            trigger:{
                seconds:2
            }
        })
    }
    
    return (
    <Tab.Navigator>
        <Tab.Screen 
            name={routes.FEED}
            component={FeedNavigator} 
            options={{
                headerShown:false,
                tabBarIcon:({color, size}) => <MaterialCommunityIcons name="home" color={color} size={size} />
            }} />
        <Tab.Screen 
            name={routes.LISTINGS_EDIT}
            component={ListingEditScreen} 
            options={({navigation, route}) => ({
                tabBarButton:() => <NewListingButton onPress={()=>navigation.navigate(routes.LISTINGS_EDIT)} />,
                headerShown:false
            })}/>
        <Tab.Screen 
            name={routes.ACCOUNT}
            component={AccountScreen} 
            options={{
                tabBarIcon:({color, size}) => <MaterialCommunityIcons name="account" color={color} size={size} />
            }} />
    </Tab.Navigator>
);
}

export default AppNavigator;