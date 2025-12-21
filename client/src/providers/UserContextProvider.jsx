import { createContext } from "react"
import { useState, useEffect } from "react"
import axios from "axios";


export const UserContext = createContext({
    user: null,
    isUserLoggedIn: false,
    setIsUserLoggedIn: () => { },
    setUser: () => { }
})


const UserContextProvider = ({ children }) => {

    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{ user, isUserLoggedIn, setUser, setIsUserLoggedIn }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider