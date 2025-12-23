
import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Create from './pages/Create.jsx'
import Login from './pages/Login.jsx'
import Settings from './pages/Settings.jsx'

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <div className="page-wrapper" key={location.pathname}>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/login" element={<Login />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className='phone-frame'>
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  )
}

export default App
