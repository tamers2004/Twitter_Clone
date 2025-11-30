import "./RegistrationPage.css"
import LeftPanel from "./components/LeftPanel/LeftPanel"
import RightPanel from "./components/RightPanel/RightPanel"
import SignupModal from "./components/SignupModal/SignupModal"
const RegistrationPage = () => {
  return (
    <div id="registration_page" className="page">
      {/* <LeftPanel />
      <RightPanel /> */}
      <SignupModal/>
    </div>
  )
}

export default RegistrationPage