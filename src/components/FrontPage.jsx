import { useState } from 'react'
import { Link } from 'react-router-dom'
import StoryCard from './StoryCard.jsx'
import { cardData } from '../data.js'

export default function FrontPage() {
  const [pressed, setPressed] = useState(false)

  const pressCard = () => {
    setPressed(true)
    window.setTimeout(() => setPressed(false), 300)
  }

  return (
    <main className="page">
      <StoryCard pressed={pressed} onFlipHint={pressCard} />
      <Link to="/belakang-kartu" className="flip-btn" onClick={pressCard} style={{ textDecoration: 'none' }}>
        <span className="material-symbols-outlined spin">autorenew</span>
        <span>Buka 4 Pertanyaan Cerita (Balik Kartu)</span>
        <span className="material-symbols-outlined">arrow_forward</span>
      </Link>
      <div className="tips">
        <div className="tips-head">
          <span className="tips-icon"><span className="material-symbols-outlined">lightbulb</span></span>
          <span>Tips Pendamping (Kartu Panduan):</span>
        </div>
        <p>{cardData.tips}</p>
      </div>
      <div className="bottom">
        <button type="button" className="prev-btn" disabled>
          <span className="material-symbols-outlined">chevron_left</span>
          <span>Topik Sebelumnya</span>
        </button>
        <div className="quiz-badge">
          <span className="material-symbols-outlined">quiz</span>
          <span>Kuis Belum Dimulai (0/4)</span>
        </div>
      </div>
    </main>
  )
}
