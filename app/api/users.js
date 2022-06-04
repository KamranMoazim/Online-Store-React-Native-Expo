import client from "./client"

const registerEndpoint = "/users";




const register = (userInfo) => client.post(registerEndpoint, userInfo);




export default {
    register
}