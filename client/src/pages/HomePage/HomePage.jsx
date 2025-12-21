
import { useEffect, useState } from "react"
import "./HomePage.css"
import axios from "axios"
import LoadingScreen from "../RegistrationPage/components/LoadingScreen/LoadingScreen";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContextProvider";


const getTokenFromLocalStorage = () => {
  return localStorage.getItem("token");
}

const HomePage = () => {

  const token = getTokenFromLocalStorage();
  const [isLoading, setIsLoading] = useState(true);
  const userContext = useContext(UserContext);

  useEffect(() => {

    axios.get("http://localhost:3000/homepage", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => {
        console.log(res.data);
        const success = res.data.success;
        if (success === "true") {
          setIsUserLoggedIn(true);
        } else {
          setIsUserLoggedIn(false);
        }
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      })

  }, [])


  if (isLoading) {
    return <LoadingScreen />
  }

  if (!userContext.isUserLoggedIn) {
    return <div>YOU ARE NOT LOGGED IN! UNAUTHORISED</div>
  }

  return (
    <div>WELCOME TO THE HOMEPAGE, {userContext.user?.name}</div>
  )
}

export default HomePage
