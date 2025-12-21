
import GeneralButton from "../../../pages/RegistrationPage/components/GeneralButton/GeneralButton"
import "./SignInModal.css"
import { useState } from "react"
import axios from "axios"
import bcrypt from "bcryptjs"

const SignInModal = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    axios.post("http://localhost:3000/login", {
      email,
      password: await bcrypt.hash(password, 10)
    }).then((res) => {
      console.log(res.data);
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