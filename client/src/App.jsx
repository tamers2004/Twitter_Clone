
import './App.css'
import HomePage from './pages/HomePage/HomePage'
import RegistrationPage from './pages/RegistrationPage/RegistrationPage'
import { Routes, Route, Link } from "react-router-dom";
import UserContextProvider from './providers/UserContextProvider';
import Test from './pages/Test';

const App = () => {

  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<RegistrationPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </UserContextProvider>
  )
}

export default App
