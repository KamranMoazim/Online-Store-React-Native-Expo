import { create } from "apisauce";

import cache from "../utils/cache"

const apiClient = create({
    baseURL:"http://192.168.10.33:9000/api"
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