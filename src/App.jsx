import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import FrontPage from './components/FrontPage.jsx'
import BackPage from './components/BackPage.jsx'

export default function App() {
  const [muted, setMuted] = useState(false)

  return (
    <BrowserRouter>
      <div className="app">
        <Header muted={muted} onToggleMute={() => setMuted((v) => !v)} />
        <Routes>
          <Route path="/" element={<FrontPage muted={muted} />} />
          <Route path="/belakang-kartu" element={<BackPage />} />
          <Route path="*" element={<FrontPage muted={muted} />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

