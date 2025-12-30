
import { useEffect, useState } from "react"
import "./HomePage.css"
import axios from "axios"
import LoadingScreen from "../RegistrationPage/components/LoadingScreen/LoadingScreen";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContextProvider";
import NavBar from "../../components/NavBar/NavBar";
import HomeFeed from "../../components/HomeFeed/HomeFeed";
import Sidebar from "../../components/Sidebar/Sidebar";

const Feed = () => {
  return (
    <div style={{
      width: "200px",
      height:"100vh",
      background:"green",
      flex:"1"
    }}>Feed</div>
  )
}

const News = () => {
  return (
    <div style={{
      width:"400px",
      height:"100vh",
      background:"yellow"
    }}>News</div>
  )
}


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
    <div className="home_page">
      <NavBar />
      <HomeFeed />
      <Sidebar />
    </div>
  )
}

export default HomePage
