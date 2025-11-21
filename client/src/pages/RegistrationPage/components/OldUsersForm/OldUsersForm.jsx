import AppleLogo from "../AppleLogo/AppleLogo"
import SignUpButton from "../SignUpButton/SignUpButton"
import "./OldUsersForm.css"


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
  return (
    <div id="old_users_form">
      <SignUpButton child={<GoogleButton /> } />
      <SignUpButton child={<AppleButton /> } />
      <span>------------- or -----------</span>
      <SignUpButton child={<CreateAccountButton /> } />
    </div>
  )
}

export default OldUsersForm