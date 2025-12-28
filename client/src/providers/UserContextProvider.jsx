import { createContext } from "react"
import { useState, useEffect } from "react"
import axios from "axios";


export const UserContext = createContext({
    user: null,
    isUserLoggedIn: false,
    setIsUserLoggedIn: () => { },
    setUser: () => { },
    login: (email, password) => { }
})


const UserContextProvider = ({ children }) => {

    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    const login = async (email, password) => {
        const response = await axios.post("http://localhost:3000/login", {
            email,
            password
        })

        return response;
    }

    return (
        <UserContext.Provider value={{ user, isUserLoggedIn, setUser, setIsUserLoggedIn, login }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
