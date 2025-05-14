import { useState, useEffect } from "react"
import Splash from "./Pages/Splash"
import Auth from "./Pages/Auth"
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import { Routes, Route } from 'react-router-dom';

function App() {

  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 3000);
    return () => clearTimeout(timer)
  }, [])
  return (
    <>
        <Routes>
          <Route path="/" element={showSplash ? <Splash /> : <Auth />}></Route>
          <Route path="/signin" element={<Signin/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
        </Routes>
    </>
  )
}

export default App
