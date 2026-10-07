import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import FrontPage from './components/FrontPage.jsx'
import BackPage from './components/BackPage.jsx'
import RewardPage from './components/RewardPage.jsx'
import UploadNalarPage from './components/UploadNalarPage.jsx'

function Shell({ muted, onToggleMute }) {
  const loc = useLocation()
  const hideHeader = loc.pathname === '/upload-kartu-nalar'
  return (
    <div className="app">
      {!hideHeader && <Header muted={muted} onToggleMute={onToggleMute} />}
      <Routes>
        <Route path="/depan-kartu" element={<FrontPage muted={muted} />} />
        <Route path="/belakang-kartu" element={<BackPage />} />
        <Route path="/kartu-selesai" element={<RewardPage />} />
        <Route path="/upload-kartu-nalar" element={<UploadNalarPage />} />
        <Route path="/" element={<Navigate to="/depan-kartu" replace />} />
        <Route path="*" element={<Navigate to="/depan-kartu" replace />} />
      </Routes>
    </div>
  )
}

export default function App() {
  const [muted, setMuted] = useState(false)

  return (
    <BrowserRouter>
      <Shell muted={muted} onToggleMute={() => setMuted((v) => !v)} />
    </BrowserRouter>
  )
}

