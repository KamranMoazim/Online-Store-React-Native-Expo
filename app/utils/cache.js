import AsyncStorage from "@react-native-async-storage/async-storage"
import moment from "moment"


const prefix = "cache";
const expireyTimeInMinutes = 360


const store = async (key, value) => {
    const item = {
        value,
        timestamp:Date.now()
    }

    try {
        await AsyncStorage.setItem(prefix+key, JSON.stringify(item))
    } catch (error) {
        console.log("error while storing the data ", error);
    }

}


const isExpired = (item) => {
    const now = moment(Date.now())
    const storedTime = moment(item.timestamp)
    return now.diff(storedTime, "minutes") > expireyTimeInMinutes;
}

const get = async (key) => {
    try {        
        const value = await AsyncStorage.getItem(prefix+key);
        const item = JSON.parse(value);

        // there are 3 scenerios

        // first  ---> item do not exits
        if(!item) return null;
        
        // second  ---> item is expired
        if(!isExpired(item)){
            await AsyncStorage.removeItem(prefix+key)
            return null;
        }

        // third  ---> item exists and has not expired
        return item.value;

    } catch (error) {
        console.log("error while getting the data ", error);
    }

}


export default {
    get,
    store,
}

