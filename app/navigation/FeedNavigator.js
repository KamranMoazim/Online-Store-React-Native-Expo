import { createNativeStackNavigator } from "@react-navigation/native-stack";


import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import routes from "./routes";

const Stack = createNativeStackNavigator();

const FeedNavigator = () => (
    <Stack.Navigator  mode="card" screenOptions={{headerShown:false}}>
        <Stack.Screen name={routes.LISTINGS} component={ListingsScreen} />
        <Stack.Screen name={routes.LISTING_DETAILS} component={ListingDetailsScreen}/>
    </Stack.Navigator>
)


export default FeedNavigator