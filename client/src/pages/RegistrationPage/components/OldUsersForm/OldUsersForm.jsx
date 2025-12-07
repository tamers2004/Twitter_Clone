import { useState } from "react"
import Modal from "../../../../components/Modal/Modal"
import AppleLogo from "../AppleLogo/AppleLogo"
import SignUpButton from "../SignUpButton/SignUpButton"
import "./OldUsersForm.css"
import SignupModal from "../SignupModal/SignupModal"


const AppleButton = () => {
  return (
    <p style={{display:"flex", alignItems:"center", justifyContent: "center", gap:"5px"}}>
      <AppleLogo /> <span>Sign up with Apple</span>
    </p>
  )
}

const GoogleButton = () => {
  return (
    <p style={{display:"flex", alignItems:"center", justifyContent: "center", gap:"5px"}}>
      <span>Sign up with Google</span>
    </p>
  )
}

const CreateAccountButton = () => {
  return (
    <p style={{display:"flex", alignItems:"center", justifyContent: "center", gap:"5px"}}>
     <span>Create an Account</span>
    </p>
  )
}

const OldUsersForm = () => {
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);



  
  return (
    <div id="old_users_form">
      <SignUpButton child={<GoogleButton /> } />
      <SignUpButton child={<AppleButton /> } />
      <span>------------- or -----------</span>
      <SignUpButton onClick={() => {setIsSignUpModalOpen(true)}} child={<CreateAccountButton /> } />
      <Modal isOpen={isSignUpModalOpen} onClose={() => {setIsSignUpModalOpen(false) }} title="Sign up" children={<SignupModal />} />
    </div>
  )
}

export default OldUsersForm