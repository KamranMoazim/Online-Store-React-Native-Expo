import { create } from "apisauce";


const apiClient = create({
    baseURL:"http://192.168.10.33:9000/api"
})

// 192.168.10.1

export default apiClient;