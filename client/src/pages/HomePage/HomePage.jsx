
import { useEffect, useState } from "react"
import "./HomePage.css"
import axios from "axios"
import LoadingScreen from "../RegistrationPage/components/LoadingScreen/LoadingScreen";



const getTokenFromLocalStorage = () => {
  return localStorage.getItem("token");
}

const HomePage = () => {

  const token = getTokenFromLocalStorage();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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

  if (!isUserLoggedIn) {
    return <div>YOU ARE NOT LOGGED IN! UNAUTHORISED</div>
  }

  return (
    <div>WELCOME TO THE HOMEPAGE</div>
  )
}

export default HomePage
