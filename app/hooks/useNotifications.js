import {useEffect} from 'react'
import * as Notifications from "expo-notifications"
import * as permissions from "expo-permissions"

import expoPushTokensApi from "../api/expoPushTokens"

export default useNotifications = (notificationListener) => {

    const registerForPushNotifications = async () => {
        const response = await permissions.askAsync(permissions.NOTIFICATIONS);
        if(!response.granted) return;
        const token = Notifications.getExpoPushTokenAsync();
        expoPushTokensApi.register(token);
    }

    useEffect(()=>{
        registerForPushNotifications();
        if(notificationListener) Notifications.addPushTokenListener(notificationListener);
        // (notification)=>navigate(routes.ACCOUNT)
    },[])
}