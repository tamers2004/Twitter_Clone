
import GeneralButton from "../../../pages/RegistrationPage/components/GeneralButton/GeneralButton"
import "./SignInModal.css"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"

import { UserContext } from "../../../providers/UserContextProvider"

const SignInModal = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  const onSubmit = async () => {
    userContext.login(email, password).then(res => {
      console.log({res})
      const { success } = res.data;
      if (success) {
        userContext.setUser(res.data.user);
        userContext.setIsUserLoggedIn(true);
        navigate("/home");
      }
    })
    .catch(err => {
      console.error(err);
    })

  }

  return (
    <div id="signup_modal">

      <h1>Sign In</h1>
      <input onChange={(e) => setEmail(e.target.value)} value={email} id="basic_input" type="email" placeholder="Email" />
      <input onChange={(e) => setPassword(e.target.value)} value={password} id="basic_input" type="password" placeholder="Password" />

      <GeneralButton onClick={onSubmit} child={<h1>Sumbit</h1>} />
    </div>
  )
}

export default SignInModal