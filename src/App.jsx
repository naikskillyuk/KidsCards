import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header.jsx'
import FrontPage from './components/FrontPage.jsx'
import BackPage from './components/BackPage.jsx'
import RewardPage from './components/RewardPage.jsx'

export default function App() {
  const [muted, setMuted] = useState(false)

  return (
    <BrowserRouter>
      <div className="app">
        <Header muted={muted} onToggleMute={() => setMuted((v) => !v)} />
        <Routes>
          <Route path="/depan-kartu" element={<FrontPage muted={muted} />} />
          <Route path="/belakang-kartu" element={<BackPage />} />
          <Route path="/kartu-selesai" element={<RewardPage />} />
          <Route path="/" element={<Navigate to="/depan-kartu" replace />} />
          <Route path="*" element={<Navigate to="/depan-kartu" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

