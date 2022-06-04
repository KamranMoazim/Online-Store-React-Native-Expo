import client from "./client"

const loginEndpoint = "/auth";




const login = (email, password) => client.post(loginEndpoint, { email, password });




export default {
    login,
}