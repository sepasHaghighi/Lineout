import { useState, useEffect } from "react"
import Splash from "./Pages/Splash"
import Auth from "./Pages/Auth"
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import SearchBy from "./Pages/SearchBy";
import Availableservices from "./Pages/AvailableServices";
import Places from "./Pages/Places";
import PlacePage from "./Pages/PlacePage";
import { Routes, Route } from 'react-router-dom';
import Reservation from "./Pages/Reservation";
import Fun from "./Pages/Fun";
import Redirect from "./Pages/Redirect";

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
          <Route path="/searchBy" element={<SearchBy/>}></Route>
          <Route path="/availableServices" element={<Availableservices/>}></Route>
          <Route path="/places/:category" element={<Places/>}></Route>
          <Route path="/places/:category/:place" element={<PlacePage/>}></Route>
          <Route path="/places/:category/:place/reservation" element={<Reservation/>}></Route>
          <Route path="/fun" element={<Fun/>}></Route>
          <Route path="/:funCategory/redirect" element={<Redirect/>}></Route>

        </Routes>
    </>
  )
}

export default App
