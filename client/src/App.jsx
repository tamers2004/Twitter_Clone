import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    tag: "",
    first_name: "",
    last_name: ""
  })



  const submitUser = async () => {
    axios.post("http://localhost:3000/register", {...userInfo})
    .then((res) => {
      alert("register finished successfully")
      })
    .catch(err => {
        console.log(err)
      })
  }

  return (
    <div style={{backgroundColor: "black", color: "white"}}>
       <input type="text" placeholder="email" onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })} />
       <input type="text" placeholder="tag" onChange={(e) => setUserInfo({ ...userInfo, tag: e.target.value })} />
       <input type="password" placeholder="password" onChange={(e) => setUserInfo({ ...userInfo,password: e.target.value })} />
       <input type="text" placeholder="first_name" onChange={(e) => setUserInfo({ ...userInfo, first_name: e.target.value })} />
       <input type="text" placeholder="last_name" onChange={(e) => setUserInfo({ ...userInfo, last_name: e.target.value })} />


      <button onClick={submitUser}>Submit</button>
    </div>
  )
}

export default App
