import { Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './components/navbar.jsx'
import Guilds from './components/guilds.jsx'
import Home from './components/home.jsx'
import Members from './components/members.jsx'

export default function App() {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: 16 }}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guilds" element={<Guilds />} />
        <Route path="/members" element={<Members />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  )
}
