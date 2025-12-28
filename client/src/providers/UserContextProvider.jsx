import { createContext } from "react"
import { useState, useEffect } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";


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
    const navigate = useNavigate();


    const login = async (email, password) => {
        const response = await axios.post("http://localhost:3000/login", {
            email,
            password
        })

        const { token } = response.data;
        localStorage.setItem("token", token);
        setIsUserLoggedIn(true);
        setUser(response.data.user);

        return response;
    }

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setIsUserLoggedIn(true);
        }
    }, [])

    return (
        <UserContext.Provider value={{ user, isUserLoggedIn, setUser, setIsUserLoggedIn, login }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
