import "./RegistrationPage.css"
import LeftPanel from "./components/LeftPanel/LeftPanel"
import RightPanel from "./components/RightPanel/RightPanel"
const RegistrationPage = () => {
  return (
    <div id="registration_page" className="page">
      <LeftPanel />
      <RightPanel />
    </div>
  )
}

export default RegistrationPage