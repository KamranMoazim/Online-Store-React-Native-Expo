import { create } from "apisauce";


import cache from "../utils/cache"
import authStorage from "../utils/authStore"
import settings from "../config/settings";


const apiClient = create({
    // baseURL:"http://192.168.10.33:9000/api",
    baseURL: settings.apiUrl,
    
})


apiClient.addAsyncRequestTransform(async(request) => {
    const token = await authStorage.getToken();
    if(!token) return;
    request.headers["x-auth-token"] = token;
})

const get = apiClient.get;

apiClient.get = async (url, params, axiosConfig) => {

    const response = await get(url, params, axiosConfig);

    if(!response.ok){
        cache.store(url, response.data)
        return response
    }

    // either you are offline or server has some error
    const data = await cache.get(url)
    console.log(data)
    return data ? {ok:true, data} : response

}

export default apiClient;