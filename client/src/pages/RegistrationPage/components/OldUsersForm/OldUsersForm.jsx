import { useState } from "react"
import Modal from "../../../../components/Modal/Modal"
import AppleLogo from "../AppleLogo/AppleLogo"
import GeneralButton from "../GeneralButton/GeneralButton"
import "./OldUsersForm.css"
import SignupModal from "../SignupModal/SignupModal"
import { useNavigate } from "react-router-dom";


const AppleButton = () => {
  return (
    <p style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "5px" }}>
      <AppleLogo /> <span>Sign up with Apple</span>
    </p>
  )
}

const GoogleButton = () => {
  return (
    <p style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "5px" }}>
      <span>Sign up with Google</span>
    </p>
  )
}

const CreateAccountButton = () => {
  return (
    <p style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "5px" }}>
      <span>Create an Account</span>
    </p>
  )
}




const OldUsersForm = () => {
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const navigate = useNavigate();


  const onSuccess = () => {
    setIsSignUpModalOpen(false);
    navigate("/home");
  }

  return (
    <div id="old_users_form">
      <GeneralButton child={<GoogleButton />} />
      <GeneralButton child={<AppleButton />} />
      <span>------------- or -----------</span>
      <GeneralButton onClick={() => { setIsSignUpModalOpen(true) }} child={<CreateAccountButton />} />
      <Modal
        isOpen={isSignUpModalOpen}
        onClose={() => { setIsSignUpModalOpen(false) }}
        title="Sign up"
        children={<SignupModal onSuccess={onSuccess} />} />
    </div>
  )
}

export default OldUsersForm
