import { useNavigate } from "react-router-dom"
import Footer from "../../components/Modal/Footer/Footer"
import Modal from "../../components/Modal/Modal"
import SignInModal from "../../components/Modal/SignInModal/SignInModal"
import TermsService from "../../components/Modal/TermsService/TermsService"
import "./RegistrationPage.css"
import LeftPanel from "./components/LeftPanel/LeftPanel"
import LoadingScreen from "./components/LoadingScreen/LoadingScreen"
import RightPanel from "./components/RightPanel/RightPanel"
import SignupModal from "./components/SignupModal/SignupModal"

import { useContext } from "react"
import { UserContext } from "../../providers/UserContextProvider"
import { useEffect } from "react"


const RegistrationPage = () => {


  const navigate = useNavigate()
  const userContext = useContext(UserContext);

  const isUserLoggedIn = userContext.isUserLoggedIn;
  useEffect(() => {

    console.log({isUserLoggedIn})
    if (isUserLoggedIn) {
      navigate("/home");
    }
  }, [isUserLoggedIn])


  // if (isUserLoggedIn) {
  //   return <HomePage />
  // }

  return (
    <div id="registration_page" className="page">
      <div className="page-container">
        <LeftPanel />
        <RightPanel />
        
      </div>
      <Footer />
    </div>
  )
}

export default RegistrationPage