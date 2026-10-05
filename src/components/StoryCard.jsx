import { useState } from 'react'
import { cardData } from '../data.js'

const bars = [
  { h: 12, c: 'var(--secondary)' },
  { h: 20, c: 'var(--secondary)' },
  { h: 16, c: 'var(--secondary)' },
  { h: 24, c: 'var(--primary)' },
  { h: 12, c: 'var(--secondary)' },
  { h: 20, c: 'var(--secondary)' },
  { h: 16, c: 'var(--outline-variant)' },
  { h: 8, c: 'var(--outline-variant)' },
  { h: 20, c: 'var(--outline-variant)' },
  { h: 12, c: 'var(--outline-variant)' },
  { h: 8, c: 'var(--outline-variant)' },
]

export default function StoryCard({ pressed, onFlipHint }) {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <>
      <div className="status">
        <div className="status-row">
          <span className="category-pill">
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>hearing</span>
            {cardData.category}
          </span>
          <span className="owned-pill">
            <span className="material-symbols-outlined" style={{ fontSize: 16, color: 'var(--secondary)' }}>check_circle</span>
            <b>Milik Kamu</b>
          </span>
        </div>
        <div className="level-card">
          <div className="level-left">
            <span className="level-badge">Level 1 dari 5</span>
            <span className="level-name">{cardData.levelName}</span>
          </div>
          <div className="level-dots">
            {[1, 2, 3, 4, 5].map((n) => (
              <span key={n} className={n === 1 ? 'dot on' : 'dot'} />
            ))}
            <span className="lvl-text">Lvl 1/5</span>
          </div>
        </div>
        <div className="progress">
          <div className="progress-top">
            <span className="saved">
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>cloud_done</span>
              Tersimpan otomatis
            </span>
            <span className="count">Topik 22 / 50 (44%)</span>
          </div>
          <div className="bar"><div className="bar-fill" style={{ width: '44%' }} /></div>
        </div>
      </div>

      <div className={pressed ? 'flashcard pressed' : 'flashcard'}>
        <div className="card-badges">
          <div className="badges-left">
            <span className="front-badge">📖 Sisi Depan: Kisah Pilihan</span>
            <span className="lvl-badge">Level 1 • Pemula</span>
          </div>
          <span className="audio-tag">
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>volume_up</span> Audio Cerita
          </span>
        </div>
        <h1 className="story-title">{cardData.title}</h1>
        <div className="banner">
          <img src={cardData.banner} alt="Nabi Yunus berdoa di dalam perut ikan paus" />
          <div className="banner-overlay">
            <span><span className="material-symbols-outlined" style={{ fontSize: 18 }}>menu_book</span>{cardData.value}</span>
          </div>
        </div>
        <div className="story-box">
          <p>{cardData.storyTop}</p>
          <div className="doa"><p>&ldquo;{cardData.doa}&rdquo;</p></div>
          <p style={{ marginBottom: 0 }}>{cardData.storyBottom}</p>
        </div>
        <div className="audio-box">
          <div className="audio-row">
            <button type="button" aria-label="Putar Audio Cerita" onClick={() => setIsPlaying((v) => !v)} className={isPlaying ? 'play-btn playing' : 'play-btn'}>
              <span className="material-symbols-outlined">{isPlaying ? 'pause' : 'play_arrow'}</span>
              <span>{isPlaying ? 'JEDA' : 'DENGARKAN'}</span>
            </button>
            <div className="wave">
              <div className="wave-times"><strong>{cardData.audioCurrent}</strong><span>{cardData.audioTotal}</span></div>
              <div className="wave-bars">
                {bars.map((b, i) => (<i key={i} style={{ height: b.h, background: b.c }} />))}
              </div>
            </div>
            <button type="button" aria-label="Putar Ulang Audio" className="replay" onClick={onFlipHint}>
              <span className="material-symbols-outlined">replay_10</span>
            </button>
          </div>
          <div className="narrator">
            <span className="narrator-left">Disuarakan oleh <strong>{cardData.narrator}</strong> (Cerita Ramah Anak)</span>
            <span className="speed">Kecepatan 1.0x</span>
          </div>
        </div>
      </div>
    </>
  )
}
