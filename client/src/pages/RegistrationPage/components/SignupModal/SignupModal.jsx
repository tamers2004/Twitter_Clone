
import { useState } from "react"
import Logo from "../Logo/Logo"
import SignUpButton from "../SignUpButton/SignUpButton"
import "./SignupModal.css"
import axios from "axios"
import bcrypt from "bcryptjs";

const SignupModal = () => {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  const createUserInServer = async () => {
    setIsLoading(true)

    try {

      const response = await axios.post("http://localhost:3000/register", {
        name,
        password: await bcrypt.hash(password, 10),
        email
      })
    } catch (err) {
      console.error(err);
    }
    setIsLoading(false);
    console.log(response.data);
  }
  
  
  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <div id="signup_modal">
        <div id="logo_wrapper">
            <Logo/>
        </div>
        <h1>Create an account</h1>
        <input onChange={(e) => setName(e.target.value)} value={name} id="basic_input" type="text" placeholder="Name" />
        <input onChange={(e) => setEmail(e.target.value)} value={email} id="basic_input" type="email" placeholder="Email" />
        <input onChange={(e) => setPassword(e.target.value)} value={password} id="basic_input" type="password" placeholder="Password" />
        
        <SignUpButton onClick={createUserInServer} child={<h1>hello</h1> } />
    </div>
  )
}

export default SignupModal