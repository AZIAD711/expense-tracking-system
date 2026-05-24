import { useState } from 'react'
// import './App.css'
import { LoginPage } from './pages/login/Login.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  )
}

export default App
