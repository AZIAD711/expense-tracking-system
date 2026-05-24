import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import  LoginPage  from './pages/login/Login.jsx'
import CreateAccountPage from './pages/create-account/create-account.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create-account" element={<CreateAccountPage />} />
      </Routes>
    </>
  )
}

export default App
