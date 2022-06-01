import {useState, useEffect} from "react"
import * as Location from "expo-location"


export default useLocation = () => {

    const [location, setLocation] = useState();

    const getLocation = async () => {
        try {
            const {granted, status} = await Location.requestForegroundPermissionsAsync();
            // console.log(status)
            // console.log(granted)
            if(!granted) return;
            const {coords:{latitude, longitude}} = await Location.getLastKnownPositionAsync();
            // console.log({latitude, longitude})
            setLocation({longitude, latitude});
            // console.log(coords)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getLocation();
    },[])

    return {
        location
    }
}