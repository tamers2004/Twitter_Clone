import Footer from "../../components/Modal/Footer/Footer"
import Modal from "../../components/Modal/Modal"
import SignInModal from "../../components/Modal/SignInModal/SignInModal"
import TermsService from "../../components/Modal/TermsService/TermsService"
import "./RegistrationPage.css"
import LeftPanel from "./components/LeftPanel/LeftPanel"
import LoadingScreen from "./components/LoadingScreen/LoadingScreen"
import RightPanel from "./components/RightPanel/RightPanel"
import SignupModal from "./components/SignupModal/SignupModal"
const RegistrationPage = () => {






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