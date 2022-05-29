import {useState, useEffect} from "react"
import * as Location from "expo-location"


export default useLocation = () => {

    const [location, setLocation] = useState();

    const getLocation = async () => {
        const {granted} = await Location.requestForegroundPermissionsAsync();
        if(!granted) return;
        const {coords:{latitude, longitude}} = await Location.getLastKnownPositionAsync();
        setLocation({longitude, latitude});
    }

    useEffect(()=>{
        getLocation();
    },[])

    return {
        location
    }
}