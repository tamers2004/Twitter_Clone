
import { useState } from "react"
import GeneralButton from "../GeneralButton/GeneralButton"
import "./SignupModal.css"
import axios from "axios"
import LoadingScreen from "../LoadingScreen/LoadingScreen"
import { useContext } from "react"
import { UserContext } from "../../../../providers/UserContextProvider"

const SignupModal = ({ onSuccess }) => {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const userContext = useContext(UserContext);

  const createUserInServer = async () => {
    setIsLoading(true)

    try {

      const response = await axios.post("http://localhost:3000/register", {
        name,
        password,
        email
      })

      const token = response.data.token;
      localStorage.setItem("token", token);
      userContext.setIsUserLoggedIn(true);
      userContext.setUser(response.data.user);
      onSuccess();

    } catch (err) {
      console.error(err);
    }
    setIsLoading(false);
    console.log(response.data);
  }


  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div id="signup_modal">

      <h1>Create an account</h1>
      <input onChange={(e) => setName(e.target.value)} value={name} id="basic_input" type="text" placeholder="Name" />
      <input onChange={(e) => setEmail(e.target.value)} value={email} id="basic_input" type="email" placeholder="Email" />
      <input onChange={(e) => setPassword(e.target.value)} value={password} id="basic_input" type="password" placeholder="Password" />

      <GeneralButton onClick={createUserInServer} child={<h1>Sumbit</h1>} />
    </div>
  )
}

export default SignupModal
