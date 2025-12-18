
import './App.css'
import HomePage from './pages/HomePage/HomePage'
import RegistrationPage from './pages/RegistrationPage/RegistrationPage'
import { Routes, Route, Link } from "react-router-dom";

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<RegistrationPage />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  )
}

export default App
