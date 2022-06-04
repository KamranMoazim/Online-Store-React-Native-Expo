import {useContext} from 'react'
import jwtDecode from 'jwt-decode'

import authStorage from "../utils/authStore"
import AuthContext from "../Contexts/AuthContext"


export default useAuth = () => {
    const {user, setUser} = useContext(AuthContext)


    const logIn = async (authToken) => {

        const user = jwtDecode(authToken);
        setUser(user);
        await authStorage.storeToken(authToken)

    }

    const logOut = () => {
        setUser(null);
        authStorage.removeToken();
    }

    return {
        user,
        logIn,
        logOut,
    };
}