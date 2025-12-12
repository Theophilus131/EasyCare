import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import LoginScreen from './pages/LoginScreen'
import WelcomeScreen from './pages/WelcomeScreen'
import BookingScreen from './pages/BookingScreen'
import DashboardScreen from './pages/DashboardScreen'
import ProfileScreen from './pages/ProfileScreen'
import './App.css'

function App() {
  const [user, setUser] = useState(null)

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<LoginScreen setUser={setUser} />} />
          <Route path="/welcome" element={<WelcomeScreen />} />
          <Route path="/booking" element={<BookingScreen />} />
          <Route path="/dashboard" element={<DashboardScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
