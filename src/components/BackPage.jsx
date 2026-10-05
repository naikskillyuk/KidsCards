import { useState } from 'react'
import { Link } from 'react-router-dom'
import { quizData } from '../quizData.js'
import DoneQuestion from './DoneQuestion.jsx'
import ActiveQuestion from './ActiveQuestion.jsx'

export default function BackPage() {
  const [done, setDone] = useState(false)
  const pct = done ? 100 : 75
  const label = done ? '4 dari 4 Terjawab ✨ (Lengkap)' : 'Pertanyaan Kuis 3 dari 4 Terjawab ✨'

  return (
    <main className="page" style={{ background: 'var(--surface)', paddingTop: 80 }}>
      <div className="back-wrap">
        <div className="back-status">
          <div className="back-status-top">
            <div className="back-topic">
              <span className="cat-pill"><span className="material-symbols-outlined" style={{ fontSize: 16 }}>hearing</span>Kategori SIMAK</span>
              <span className="back-topic-text">{quizData.topic}</span>
            </div>
            <div className="star-row">
              {[0, 1, 2, 3, 4].map((i) => (
                <span key={i} className="material-symbols-outlined" style={{ fontSize: 16, color: i < quizData.stars ? 'var(--tertiary-fixed-dim)' : 'var(--outline-variant)' }}>star</span>
              ))}
            </div>
          </div>
          <div className="session-pill">
            <div className="session-left">
              <span className="open-tag"><span className="material-symbols-outlined" style={{ fontSize: 16 }}>lock_open</span>Kartu Terbuka</span>
              <span className="owned-tag"><span className="material-symbols-outlined" style={{ fontSize: 16 }}>verified</span>Milik Kamu</span>
            </div>
            <span className="saved-tag"><span className="material-symbols-outlined" style={{ fontSize: 16, color: 'var(--primary)' }}>cloud_done</span>Topik 8 / 25</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, paddingTop: 4 }}>
            <div className="discuss-head">
              <span className="left"><span className="material-symbols-outlined" style={{ fontSize: 18, color: 'var(--secondary)' }}>verified</span>Kemajuan Diskusi</span>
              <span className="right">{label}</span>
            </div>
            <div className="discuss-bar"><div className="discuss-fill" style={{ width: `${pct}%` }} /></div>
          </div>
        </div>
        <div className="quiz-card">
          <div className="quiz-banner">
            <div className="quiz-banner-left">
              <span className="quiz-ico"><span className="material-symbols-outlined" style={{ fontSize: 20 }}>quiz</span></span>
              <div style={{ minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span className="quiz-title">Sisi Belakang Kartu</span>
                  <span className="open-mini">Kartu Terbuka</span>
                </div>
                <div className="quiz-sub">{quizData.subtitle}</div>
              </div>
            </div>
            <Link to="/" className="flip-back">
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>flip</span>Lihat Narasi
            </Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {quizData.questions.map((q) => (<DoneQuestion key={q.n} q={q} />))}
            <ActiveQuestion done={done} onToggleDone={() => setDone((v) => !v)} />
          </div>
        </div>
        <div className="tips-box">
          <span className="ico"><span className="material-symbols-outlined" style={{ fontSize: 22 }}>lightbulb</span></span>
          <div style={{ minWidth: 0 }}>
            <h4>Tips Diskusi Pendamping</h4>
            <p>{quizData.tips}</p>
          </div>
        </div>
        <div className={done ? 'celebrate ring' : 'celebrate'}>
          <span className="ico"><span className="material-symbols-outlined" style={{ fontSize: 24 }}>stars</span></span>
          <div style={{ minWidth: 0 }}>
            <b>Topik 8 Siap Diselesaikan! <span style={{ color: 'var(--tertiary)' }}>+10 Bintang</span></b>
            <br /><small>Progres Kartu Terupdate: 8 / 25 Topik Selesai</small>
          </div>
        </div>
        <button type="button" className="next-btn">
          <span>Selesaikan Topik 8 &amp; Lanjut ke Topik 9: Nabi Zakariya a.s.</span>
          <span className="material-symbols-outlined" style={{ fontSize: 24 }}>rocket_launch</span>
        </button>
      </div>
    </main>
  )
}
