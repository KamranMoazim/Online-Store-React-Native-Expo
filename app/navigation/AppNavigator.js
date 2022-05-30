import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {MaterialCommunityIcons} from "@expo/vector-icons"

import AccountScreen from "../screens/AccountScreen";
import ListingEditScreen from "../screens/ListingEditScreen";
import FeedNavigator from "./FeedNavigator";
import NewListingButton from "../screens/NewListingButton";

import routes from "./routes";


const Tab = createBottomTabNavigator()

const AppNavigator = () => (
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
) 

export default AppNavigator;